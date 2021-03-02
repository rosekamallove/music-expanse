from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import CreateRoomSerializer, RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

'''
An API view rendering list format of the Room model:
'''
class RoomView(generics.ListAPIView): 
    queryset = Room.objects.all()
    serializer_class = RoomSerializer



'''
An APIView which will let us view a list of all of the different rooms:
'''
class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
           self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause, votes_to_skip=votes_to_skip)
                room.save()
            
            return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse


#an API view rendering list format of the Room model:
class RoomView(generics.ListAPIView): 
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

###### Writing a api view which will let us view a list of all of the diff rooms #######

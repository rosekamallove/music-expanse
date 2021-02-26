from django.shortcuts import render # this will allow us to create a class that inherits from a generic API view
from rest_framework import generics, status
from .serializers import RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

# Create your views (to render the api end points) here.

def main(request):
    return HttpResponse("<h1>Hello</h1>")
    


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

###### Writing a api view which will let us view a list of all of the diff rooms #######

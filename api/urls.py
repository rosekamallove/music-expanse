"""
This file stors all the urls local to this app.
"""

from django.urls import path
# from django.contrib import admin
from .views import RoomView 
from .views import main
urlpatterns = [
    path('home', main),
    
    path('room', RoomView.as_view())
]

"""
This file stors all the urls local to this app.
"""

from django.urls import path
from .views import RoomView 

urlpatterns = [
    path('room', RoomView.as_view())
]

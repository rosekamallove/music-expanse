"""
This file stors all the urls local to this app.
"""

from django.urls import path
from .views import RoomView , CreateRoomView

urlpatterns = [
    path('room', CreateRoomView.as_view())
]

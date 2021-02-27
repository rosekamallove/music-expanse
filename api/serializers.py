from rest_framework import serializers
from .models import Room

"""
This translates the Room Model in models.py into a json response.
"""

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        #All the properties of the Room Model:
        fields = (
        'id', 
        'code', 
        'host', 
        'guest_can_pause',
        'votes_to_skip', 
        'created_at',)


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

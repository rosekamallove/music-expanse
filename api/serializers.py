from rest_framework import serializers
from .models import Room

"""
This translates the Room Model in models.py into a json response.
"""

class RoomSerializer(serializers.ModelSerializer):
    # this serializes the data that we can return back to as a response.
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


'''
We want this serializer to make sure that the data being sent in our post request
is valid and it fits/corresponds to the correct fields that we need to create a new room.
'''
class CreateRoomSerializer(serializers.ModelSerializer):
    # this is looking to actually serialize a request.
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

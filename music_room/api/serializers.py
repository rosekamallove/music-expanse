from rest_framework import serializers
from .models import Room

####### To give front end the info it demands instead of returning it to the  html we do this #######


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        # these are all the properties in the room class (model)
        fields = ('id', 'code', 'host', 'guest_can_pause',
                  'votes_to_skip', 'created_at',)

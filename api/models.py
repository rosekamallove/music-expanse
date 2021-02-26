"""
All the models (the single, definitive source of information) for the app, 
which python converts to a database and does all the database functions on its own.
"""
from django.db import models
import string
import random


def generateUniqueCode(): # => Generates the unique code for each room
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code


#Model for each room the user makes:
class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

"""
music_room URL Configuration
The `urlpatterns` list routes URLs to views.     
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('api/', include('api.urls')),
    path('', include('frontend.urls'))
]

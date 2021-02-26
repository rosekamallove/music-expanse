from django.urls import path, include
from .views import index
urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index)
]

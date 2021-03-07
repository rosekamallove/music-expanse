from django.urls import path, include
from .views import AuthURL, spotify_callback, IsAuthenticated
urlpatterns = [
    path('get-auth-url', AuthURL.as_view()),
    path('redirect', spotify_callback),
    path('in-authenticated', IsAuthenticated.as_view())
]

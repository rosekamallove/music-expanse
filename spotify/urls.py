from django.urls import path, include
from .views import AuthURL
urlpatterns = [
    path('/get-auth-url', AuthURL.as_view()),
]

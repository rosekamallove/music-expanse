from django.urls import path
# from django.contrib import admin
from .views import RoomView
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('room', RoomView.as_view()),
]

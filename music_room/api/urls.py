from django.urls import path
# from django.contrib import admin
from .views import RoomView
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', RoomView.as_view()),
]

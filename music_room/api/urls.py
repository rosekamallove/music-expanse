from django.urls import path
from django.contrib import admin
from .views import main
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home', main)
]

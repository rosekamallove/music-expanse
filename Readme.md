## Music Room

First Step:

install python3 
### `sudo apt install python3`

Second Step:

install node.js and npm 
### `sudo apt install nodejs`
install pip3 
### `sudo apt install python3-pip`
install python modules 
### `pip3 install django djangorestframeworks`


## Start a Django project 
### `django-admin startproject music_room`

To make an django app :
1. ### `django-admin startapp api`
2. add the app name 'api.apps.ApiConfig' in /music_room/music_room/settings.py in the installed apps section


--> Whenever you make a change to the database run the following command
### `pyhton3 ./manage.py makemigrations`
### `pyhton3 ./manage.py migrate`
To run the server typ command
### `pyhton3 ./manage.py runserver`
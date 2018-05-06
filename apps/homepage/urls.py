from django.urls import path

from . import views

app_name = 'homepage'
urlpatterns = [
    path('', views.homepage, name='index'),
    path('attendee/<str:user_id>/', views.attendee_list, name='playlist')
]

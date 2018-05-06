from django.urls import path

from . import views

app_name = 'dashboard'
urlpatterns = [
    path('', views.index, name='index'),
    path('festival-profile/', views.festival_profile, name='festival_profile'),
    path('engagement/', views.engagement, name='engagement'),
    path('activity-map/', views.activity_map, name='activity_map'),
]

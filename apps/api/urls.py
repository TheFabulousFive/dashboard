from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter

from . import views

v1_router = DefaultRouter()
v1_router.register(r'attendees', views.AttendeeViewSet)
v1_router.register(r'stages', views.StageViewSet)

urlpatterns = [
    path('docs/', include_docs_urls(title='AfterParty API Docs')),
    path('v1/', include(v1_router.urls)),
    path('v1/stats/', views.ListStats.as_view(), name='list_stats'),
]

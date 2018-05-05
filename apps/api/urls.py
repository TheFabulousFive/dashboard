from django.urls import path, include
from rest_framework.routers import SimpleRouter
from rest_framework.documentation import include_docs_urls

from . import views

v1_router = SimpleRouter()
v1_router.register(r'attendees', views.AttendeeViewSet)

urlpatterns = [
    path('v1/', include(v1_router.urls)),
    path('docs/', include_docs_urls(title='AfterParty API Docs')),
]

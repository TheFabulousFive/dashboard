from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
)

from .models import Attendee
from .serializers import AttendeeSerializer


# Create your views here.
class AttendeeViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                      DestroyModelMixin):
    queryset = Attendee.objects.all()
    serializer_class = AttendeeSerializer
    lookup_field = 'user_id'

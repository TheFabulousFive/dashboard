from rest_framework.mixins import (
    CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
)
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet

from .models import Attendee, Stage
from .serializers import AttendeeSerializer, StageSerializer


class AttendeeViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                      DestroyModelMixin):
    queryset = Attendee.objects.all()
    serializer_class = AttendeeSerializer
    lookup_field = 'user_id'


class StageViewSet(ReadOnlyModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

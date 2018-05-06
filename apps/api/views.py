from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import (
    CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
)
from rest_framework.viewsets import GenericViewSet, ReadOnlyModelViewSet

from .models import Attendee, Stage, DataEvent
from .serializers import AttendeeSerializer, StageSerializer


class AttendeeViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                      DestroyModelMixin):
    queryset = Attendee.objects.all()
    serializer_class = AttendeeSerializer
    lookup_field = 'user_id'


class StageViewSet(ReadOnlyModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class ListStats(APIView):
    def get(self, request, format=None):
        to_return = []
        last_10 = DataEvent.objects.all().order_by('-timestamp')[:10]
        for event in last_10:
            to_return.append(
                f'Someone thumbs-{event.event_type}\'d a song at {event.location.name}'
            )
        return Response(to_return)

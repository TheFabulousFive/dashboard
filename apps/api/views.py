from rest_framework.decorators import action
from rest_framework.mixins import (
    CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
)
from rest_framework.response import Response
from rest_framework.viewsets import (GenericViewSet, ReadOnlyModelViewSet)

from .models import Attendee, PlaylistEntry, SetlistEntry, Stage, DataEvent
from .serializers import AttendeeSerializer, AttendeePlaylistEntrySerializer, StageSerializer


def process_data_events():
    queryset = DataEvent.objects.filter(processed=False)

    for obj in queryset:
        performance = obj.location.performance_set.filter(start_time__lte=obj.timestamp,
                                                          end_time__gt=obj.timestamp).first()

        if performance is None:
            continue

        setlist_entry = SetlistEntry.objects.filter(performance=performance, start_time__lte=obj.timestamp).last()

        if setlist_entry is None:
            continue

        PlaylistEntry.objects.create(
            attendee=obj.attendee,
            song=setlist_entry.song,
            performance=performance,
            event_type=obj.event_type,
            timestamp=obj.timestamp,
        )

        obj.processed = True
        obj.save()


class AttendeeViewSet(GenericViewSet, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin,
                      DestroyModelMixin):
    queryset = Attendee.objects.all()
    serializer_class = AttendeeSerializer
    lookup_field = 'user_id'

    @action(detail=True)
    def playlist(self, request, user_id=None):
        # IDGAFOS about doing this in the request/response cycle
        process_data_events()

        playlist = PlaylistEntry.objects.filter(attendee__user_id=user_id)

        # FIXME: this is not serializing
        page = self.paginate_queryset(playlist)
        if page is not None:
            serializer = AttendeePlaylistEntrySerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = AttendeePlaylistEntrySerializer(playlist, many=True)
        return Response(serializer.data)


class StageViewSet(ReadOnlyModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class StatsViewSet(GenericViewSet):
    queryset = DataEvent.objects.order_by('-timestamp').all()

    def list(self, request, format=None):
        to_return = []
        last_10 = self.get_queryset()[:10]
        for event in last_10:
            to_return.append(
                f"Someone thumbs-{event.event_type}'d a song at {event.location.name}"
            )
        return Response(to_return)

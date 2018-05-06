from rest_framework import serializers

from .models import Attendee, Performance, PlaylistEntry, Song, Stage


class AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendee
        fields = ('id', 'user_id', 'face_hash',)


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ('id', 'name')


class PerformanceSerializer(serializers.ModelSerializer):
    location = StageSerializer()

    class Meta:
        model = Performance
        fields = ('name', 'start_time', 'end_time', 'location')


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('artist', 'title', 'cover')


class AttendeePlaylistEntrySerializer(serializers.ModelSerializer):
    song = SongSerializer()
    performance = PerformanceSerializer()

    class Meta:
        model = PlaylistEntry
        fields = ('id', 'event_type', 'timestamp', 'song', 'performance')

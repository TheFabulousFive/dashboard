from rest_framework import serializers

from .models import Attendee


class AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendee
        fields = ('id', 'user_id', 'face_hash',)

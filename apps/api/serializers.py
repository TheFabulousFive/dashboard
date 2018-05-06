from rest_framework import serializers

from .models import Attendee, Stage


class AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendee
        fields = ('id', 'user_id', 'face_hash',)


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = '__all__'

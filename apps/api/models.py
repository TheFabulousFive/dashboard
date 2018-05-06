from django.db import models
from django.utils.translation import ugettext_lazy as _

DATA_EVENT_TYPE = [
    ('up', _('\N{thumbs up sign}')),
    ('dn', _('\N{thumbs down sign}')),
]


class Attendee(models.Model):
    """
    Festival attendee

    id: UUID4 value is generated on a user's device. Can be used for URLs
    face_hash: potentially large hash string generated by Deeplens for a given face
    """
    user_id = models.UUIDField()
    face_hash = models.TextField()

    class Meta:
        verbose_name = _('attendee')
        verbose_name_plural = _('attendees')


class ContentEvent(models.Model):
    """Content events are information gathered from the content ID API."""
    location = models.ForeignKey('Stage', models.PROTECT)
    timestamp = models.DateTimeField(_('timestamp'), auto_now_add=True)

    class Meta:
        verbose_name = _('content event')
        verbose_name_plural = _('content events')


class DataEvent(models.Model):
    """Data points collected for attendees"""
    event_type = models.CharField(_('event type'), max_length=2, choices=DATA_EVENT_TYPE)
    attendee = models.ForeignKey('Attendee', models.PROTECT)
    location = models.ForeignKey('Stage', models.PROTECT)
    timestamp = models.DateTimeField(_('timestamp'), auto_now_add=True)

    class Meta:
        verbose_name = _('data event')
        verbose_name_plural = _('data events')


class Performance(models.Model):
    """Festival performance data"""
    slug = models.SlugField(_('slug'), unique=True)
    name = models.CharField(_('name'), max_length=80)
    location = models.ForeignKey('Stage', models.PROTECT)
    start_time = models.DateTimeField(_('start time'))
    end_time = models.DateTimeField(_('end time'))

    class Meta:
        verbose_name = _('performance')
        verbose_name_plural = _('performances')

    @property
    def duration(self):
        return self.end_time - self.start_time

    def __str__(self):
        return self.name


class Stage(models.Model):
    """Festival stages"""
    slug = models.SlugField(_('slug'), unique=True)
    name = models.CharField(_('name'), max_length=80)

    class Meta:
        verbose_name = _('stages')
        verbose_name_plural = _('stages')

    def __str__(self):
        return self.name

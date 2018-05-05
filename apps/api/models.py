from django.db import models
from django.utils.translation import ugettext_lazy as _

DATA_EVENT_TYPE = [
    ('up', _("Up")),
    ('dn', _("Down")),
]


class Attendee(models.Model):
    """Festival attendee"""

    class Meta:
        verbose_name = _("attendee")
        verbose_name_plural = _("attendees")


class ContentEvent(models.Model):
    """Content events are information gather from the content ID API."""
    performance = models.ForeignKey('Performance', models.PROTECT)
    timestamp = models.DateTimeField(_("timestamp"), auto_now_add=True)

    class Meta:
        verbose_name = _("content event")
        verbose_name_plural = _("content events")


class DataEvent(models.Model):
    """Data points collected for attendees"""
    event_type = models.CharField(_("event type"), max_length=2, choices=DATA_EVENT_TYPE)
    attendee = models.ForeignKey('Attendee', models.PROTECT)
    location = models.ForeignKey('Stage', models.PROTECT)
    timestamp = models.DateTimeField(_("timestamp"), auto_now_add=True)

    class Meta:
        verbose_name = _("data event")
        verbose_name_plural = _("data events")


class Performance(models.Model):
    """Festival performance data"""
    name = models.CharField(_("name"), max_length=80)
    location = models.ForeignKey('Stage', models.PROTECT)
    start_time = models.DateTimeField(_("start time"))
    end_time = models.DateTimeField(_("end time"))

    class Meta:
        verbose_name = _("performance")
        verbose_name_plural = _("performances")


class Stage(models.Model):
    """Festival stages"""
    slug = models.SlugField(_("slug"))
    name = models.CharField(_("name"), max_length=80)

    class Meta:
        verbose_name = _("stages")
        verbose_name_plural = _("stages")

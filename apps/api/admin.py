from django.contrib import admin

from .models import (Attendee, ContentEvent, DataEvent, Performance, Stage)


@admin.register(Attendee)
class AttendeeAdmin(admin.ModelAdmin):
    pass


@admin.register(ContentEvent)
class ContentEventAdmin(admin.ModelAdmin):
    pass


@admin.register(DataEvent)
class DataEventAdmin(admin.ModelAdmin):
    pass


@admin.register(Performance)
class PerformanceAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "duration", "start_time", "end_time")
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "slug")


@admin.register(Stage)
class StageAdmin(admin.ModelAdmin):
    list_display = ("name",)
    prepopulated_fields = {"slug": ("name",)}
    search_fields = ("name", "slug")

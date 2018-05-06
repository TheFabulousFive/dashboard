from django.contrib import admin

from .models import (Attendee, ContentEvent, DataEvent, Performance, SetlistEntry, Song, Stage)


class SetlistEntryInline(admin.TabularInline):
    raw_id_fields = ('song',)
    ordering = ('start_time',)
    model = SetlistEntry
    extra = 1


@admin.register(Attendee)
class AttendeeAdmin(admin.ModelAdmin):
    list_display = ('user_id',)


@admin.register(ContentEvent)
class ContentEventAdmin(admin.ModelAdmin):
    pass


@admin.register(DataEvent)
class DataEventAdmin(admin.ModelAdmin):
    raw_id_fields = ('attendee',)


@admin.register(Performance)
class PerformanceAdmin(admin.ModelAdmin):
    inlines = [SetlistEntryInline]
    list_display = ('name', 'location', 'duration', 'start_time', 'end_time')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'slug')


@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'cover')


@admin.register(Stage)
class StageAdmin(admin.ModelAdmin):
    list_display = ('name',)
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'slug')

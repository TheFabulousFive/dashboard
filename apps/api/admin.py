from django.contrib import admin

from .models import (Attendee, ContentEvent, DataEvent, Performance, Stage)


class AttendeeAdmin(admin.ModelAdmin):
    pass


class ContentEventAdmin(admin.ModelAdmin):
    pass


class DataEventAdmin(admin.ModelAdmin):
    pass


class PerformanceAdmin(admin.ModelAdmin):
    pass


class StageAdmin(admin.ModelAdmin):
    pass


admin.site.register(Attendee, AttendeeAdmin)
admin.site.register(ContentEvent, ContentEventAdmin)
admin.site.register(DataEvent, DataEventAdmin)
admin.site.register(Performance, PerformanceAdmin)
admin.site.register(Stage, StageAdmin)

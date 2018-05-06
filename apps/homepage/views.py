import uuid

from django.http import Http404
from django.shortcuts import render, get_object_or_404

from apps.api.models import Attendee, PlaylistEntry
from apps.api.views import process_data_events


# Create your views here.
def homepage(request):
    return render(request, 'homepage/index.html')


def attendee_list(request, user_id):
    process_data_events()

    try:
        _uuid = uuid.UUID(user_id)
    except ValueError:
        raise Http404('Invalid user ID')

    attendee = get_object_or_404(Attendee, user_id=_uuid)
    tracks = PlaylistEntry.objects.filter(attendee__user_id=attendee.user_id)

    print()
    context = {
        'entries': tracks,
        'event_title': 'EDC Vegas 2018',
    }
    return render(request, 'homepage/attendeePlaylist.html', context)

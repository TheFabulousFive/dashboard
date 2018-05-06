import uuid

from django.http import Http404
from django.shortcuts import render, get_object_or_404

from apps.api.models import Attendee


# Create your views here.
def homepage(request):
    return render(request, 'homepage/index.html')


def attendee_list(request, user_id):
    try:
        _uuid = uuid.UUID(user_id)
    except ValueError:
        raise Http404('Invalid user ID')

    playlist = get_object_or_404(Attendee, user_id=_uuid)
    context = {
        'tracks': playlist
    }
    return render(request, 'homepage/attendeePlaylist.html', context)

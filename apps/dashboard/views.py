from django.shortcuts import render


def _get_props(component_name: str, props: dict=None) -> dict:
    if not props:
        props = {}

    return {
        'viewData': {
            'component': component_name,
            'props': props
        }
    }


def _render_index(request, context):
    return render(request, 'dashboard/index.html', context)


def index(request):
    context = {
        # Add props you want to inject into React here.
        'props': _get_props('Dashboard', {'title': 'Dashboard'})
    }
    return _render_index(request, context)


def festival_profile(request):
    context = {
        'props': _get_props('FestivalProfile', {'title': 'Festival Profile'})
    }
    return _render_index(request, context)


def engagement(request):
    context = {
        'props': _get_props('FanEngagement', {'title': 'Fan Engagement'})
    }
    return _render_index(request, context)


def activity_map(request):
    context = {
        'props': _get_props('Maps', {'title': 'Fan Activity Map'})
    }
    return _render_index(request, context)

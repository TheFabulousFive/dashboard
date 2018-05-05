from django.shortcuts import render


def index(request):
    context = {
        # Add props you want to inject into React here.
        'props': {}
    }
    return render(request, 'dashboard/index.html', context)

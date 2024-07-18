# middleware.py
from django.utils import timezone

class TimezoneMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Get the user's timezone preference (you need to implement this logic)
        user_timezone = request.headers.get("Accept-Timezone") if request.headers.get("Accept-Timezone") else 'UTC'
        
        timezone.activate(user_timezone)
        print(f'Current timezone: {timezone.get_current_timezone()}')
        response = self.get_response(request)

        return response


from django.urls import path

from apps.accounts.views import (LoginApiView, RegisterApiView, ProfileApiView)

urlpatterns = [
    path('login', LoginApiView.as_view()),
    path('register', RegisterApiView.as_view()),
    path('profile', ProfileApiView.as_view()),
]


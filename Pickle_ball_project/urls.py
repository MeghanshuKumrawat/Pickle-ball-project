
from django.contrib import admin
from django.apps import apps
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
]

if apps.is_installed('apps.accounts'):
    urlpatterns += [
        path('api/auth/', include('apps.accounts.urls')),
    ]
if apps.is_installed('apps.shop'):
    urlpatterns += [
        path('api/shop/', include('apps.shop.urls')),
    ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
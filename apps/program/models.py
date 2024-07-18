from django.db import models

class Program:
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.DurationField()
    # price

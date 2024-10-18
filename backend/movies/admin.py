from django.contrib import admin
from .models import (
    ActivityLog,
    Challenge,
    Friendship,
    Message,
    Mood,
    Movie,
    Notification,
    Recommendation,
    Review,
    StreamingService,
    Watchlist,
)

admin.site.register(Movie)
admin.site.register(Notification)
admin.site.register(StreamingService)
admin.site.register(Review)
admin.site.register(Watchlist)
admin.site.register(Mood)
admin.site.register(ActivityLog)
admin.site.register(Challenge)
admin.site.register(Message)
admin.site.register(Recommendation)
admin.site.register(Friendship)

# Register your models here.

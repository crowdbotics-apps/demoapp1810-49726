from django.conf import settings
from django.db import models


class Movie(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    release_date = models.DateField(
        null=True,
        blank=True,
    )
    genre = models.CharField(
        max_length=100,
    )
    poster = models.ImageField(
        null=True,
        blank=True,
    )


class Notification(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="notification_user",
    )
    message = models.TextField(
        null=False,
        blank=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )
    read = models.BooleanField(
        default="False",
    )


class StreamingService(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    api_key = models.CharField(
        max_length=255,
    )
    base_url = models.URLField(
        max_length=255,
    )


class Review(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="review_user",
    )
    movie = models.ForeignKey(
        "movies.Movie",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="review_movie",
    )
    rating = models.IntegerField(
        null=False,
        blank=False,
    )
    review_text = models.TextField(
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Watchlist(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="watchlist_user",
    )
    name = models.CharField(
        max_length=255,
    )
    movies = models.ManyToManyField(
        "movies.Movie",
        related_name="watchlists",
    )


class Mood(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="mood_user",
    )
    mood = models.CharField(
        max_length=100,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class ActivityLog(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="activitylog_user",
    )
    activity = models.CharField(
        max_length=255,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Challenge(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField(
        null=True,
        blank=True,
    )
    created_by = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="challenge_created_by",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Message(models.Model):
    "Generated Model"
    sender = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="message_sender",
    )
    receiver = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="message_receiver",
    )
    content = models.TextField(
        null=False,
        blank=False,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Recommendation(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="recommendation_user",
    )
    movie = models.ForeignKey(
        "movies.Movie",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="recommendation_movie",
    )
    reason = models.TextField(
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


class Friendship(models.Model):
    "Generated Model"
    from_user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="friendship_from_user",
    )
    to_user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="friendship_to_user",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        null=False,
        blank=False,
    )


# Create your models here.

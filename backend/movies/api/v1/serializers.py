from rest_framework import serializers
from movies.models import (
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


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = "__all__"


class StreamingServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = StreamingService
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = "__all__"


class WatchlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Watchlist
        fields = "__all__"


class MoodSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mood
        fields = "__all__"


class ActivityLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = ActivityLog
        fields = "__all__"


class ChallengeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Challenge
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = "__all__"


class RecommendationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recommendation
        fields = "__all__"


class FriendshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friendship
        fields = "__all__"

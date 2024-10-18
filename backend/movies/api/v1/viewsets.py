from rest_framework import authentication
from movies.models import (
    Movie,
    Friendship,
    Notification,
    StreamingService,
    Review,
    Mood,
    ActivityLog,
    Challenge,
    Message,
    Recommendation,
    Watchlist,
)
from .serializers import (
    ActivityLogSerializer,
    ChallengeSerializer,
    FriendshipSerializer,
    MessageSerializer,
    MoodSerializer,
    MovieSerializer,
    NotificationSerializer,
    RecommendationSerializer,
    ReviewSerializer,
    StreamingServiceSerializer,
    WatchlistSerializer,
)
from rest_framework import viewsets


class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Movie.objects.all()


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Notification.objects.all()


class StreamingServiceViewSet(viewsets.ModelViewSet):
    serializer_class = StreamingServiceSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = StreamingService.objects.all()


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Review.objects.all()


class WatchlistViewSet(viewsets.ModelViewSet):
    serializer_class = WatchlistSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Watchlist.objects.all()


class MoodViewSet(viewsets.ModelViewSet):
    serializer_class = MoodSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Mood.objects.all()


class ActivityLogViewSet(viewsets.ModelViewSet):
    serializer_class = ActivityLogSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ActivityLog.objects.all()


class ChallengeViewSet(viewsets.ModelViewSet):
    serializer_class = ChallengeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Challenge.objects.all()


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Message.objects.all()


class RecommendationViewSet(viewsets.ModelViewSet):
    serializer_class = RecommendationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Recommendation.objects.all()


class FriendshipViewSet(viewsets.ModelViewSet):
    serializer_class = FriendshipSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Friendship.objects.all()

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ActivityLogViewSet,
    ChallengeViewSet,
    FriendshipViewSet,
    MessageViewSet,
    MoodViewSet,
    MovieViewSet,
    NotificationViewSet,
    RecommendationViewSet,
    ReviewViewSet,
    StreamingServiceViewSet,
    WatchlistViewSet,
)

router = DefaultRouter()
router.register("movie", MovieViewSet)
router.register("notification", NotificationViewSet)
router.register("streamingservice", StreamingServiceViewSet)
router.register("review", ReviewViewSet)
router.register("watchlist", WatchlistViewSet)
router.register("mood", MoodViewSet)
router.register("activitylog", ActivityLogViewSet)
router.register("challenge", ChallengeViewSet)
router.register("message", MessageViewSet)
router.register("recommendation", RecommendationViewSet)
router.register("friendship", FriendshipViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

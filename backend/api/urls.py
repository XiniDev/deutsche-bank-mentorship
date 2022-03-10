from argparse import Namespace
from django.urls import path, include
from .views import UserViewSet,UserDetailsViewSet,MentorMenteeViewSet,MilestoneViewSet,EventViewSet,EventMenteeViewSet,SpecialtyViewSet,InterestViewSet,ReviewViewSet,ChatViewSet,MessageViewSet,UserID
from rest_framework.routers import DefaultRouter

from .views import UpdateProfileUser, UpdateProfileUserDetails

#article_list, article_details, ArticleList, ArticleDetails

router = DefaultRouter()

router.register('users', UserViewSet, basename = "users")
router.register('userDetails', UserDetailsViewSet, basename = "userDetails")
router.register('pairings', MentorMenteeViewSet, basename = "pairings")
router.register('milestones', MilestoneViewSet, basename = "milestones")
router.register('events', EventViewSet, basename = "events")
router.register('attendees', EventMenteeViewSet, basename = "attendees")
router.register('specialties', SpecialtyViewSet, basename = "specialties")
router.register('interests', InterestViewSet, basename = "interests")
router.register('reviews', ReviewViewSet, basename = "reviews")
router.register('chats', ChatViewSet, basename = "chats")
router.register('messages', MessageViewSet, basename = "messages")
router.register('userID', UserID, basename = "userID")


router.register('updateProfileUser', UpdateProfileUser, basename = "updateProfileUser")
router.register('updateProfileUserDetails', UpdateProfileUserDetails, basename = "updateProfileUserDetails")

urlpatterns = [
    path('api/', include((router.urls,'api'),namespace='api'),)
]


#router.register('Examples', ExampleViewSet, basename='Example')


from django.urls import path, include
from .views import UserID, UserViewSet,MentorMenteeViewSet,MilestoneViewSet,EventViewSet,EventMenteeViewSet,SpecialtyViewSet,InterestViewSet,ReviewViewSet,ChatViewSet,MessageViewSet,UserDetailsViewSet
from rest_framework.routers import DefaultRouter

#article_list, article_details, ArticleList, ArticleDetails

router = DefaultRouter()

router.register('users', UserViewSet)
router.register('userDetails', UserDetailsViewSet)
router.register('pairings', MentorMenteeViewSet)
router.register('milestones', MilestoneViewSet)
router.register('events', EventViewSet)
router.register('attendees', EventMenteeViewSet)
router.register('specialties', SpecialtyViewSet)
router.register('interests', InterestViewSet)
router.register('reviews', ReviewViewSet)
router.register('chats', ChatViewSet)
router.register('messages', MessageViewSet)
router.register('userID', UserID)



urlpatterns = [
    path('api/', include(router.urls))
    
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view())
    #path('articles/', article_list),
    #path('articles/<int:pk>/', article_details),

]


#router.register('Examples', ExampleViewSet, basename='Example')
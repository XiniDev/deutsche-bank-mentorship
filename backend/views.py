from django.contrib.auth.models import User
from .models import UserDetails
from .models import MentorMentees
from .models import Milestones
from .models import Events
from .models import EventMentees
from .models import Specialties
from .models import Interests
from .models import Reviews
from .models import Chat
from .models import ChatMessages
from .serializers import UserSerializer,UserDetailSerializer,MentorMenteeSerializer, MilestoneSerializer,EventSerializer,EventMenteesSerializer,SpecialtySerializer,InterestSerializer,ReviewsSerializer,ChatSerializer,MessageSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer


class MentorMenteeViewSet(viewsets.ModelViewSet):
    queryset = MentorMentees.objects.all()
    serializer_class = MentorMenteeSerializer


class MilestoneViewSet(viewsets.ModelViewSet):
    queryset = Milestones.objects.all()
    serializer_class = MilestoneSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventSerializer


class EventMenteeViewSet(viewsets.ModelViewSet):
    queryset = EventMentees.objects.all()
    serializer_class = EventMenteesSerializer



class SpecialtyViewSet(viewsets.ModelViewSet):
    queryset = Specialties.objects.all()
    serializer_class = SpecialtySerializer


class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interests.objects.all()
    serializer_class = InterestSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
 

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessages.objects.all()
    serializer_class = MessageSerializer




















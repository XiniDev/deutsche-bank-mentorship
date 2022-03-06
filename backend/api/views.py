from lib2to3.pgen2 import token
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
from .serializers import UserSerializer,UserDetailSerializer,MentorMenteeSerializer, MilestoneSerializer,EventSerializer,EventMenteesSerializer,SpecialtySerializer,InterestSerializer,ReviewsSerializer,ChatSerializer,MessageSerializer, authToken
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token

class UserID(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = authToken
    authentication_classes = (TokenAuthentication,)
    #permission_classes = [IsAuthenticated]
    
class UserIDviewSet(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        queryset = Token.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = authToken
        return Response(serializer.data)





class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    #permission_classes = [IsAuthenticated]

class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer
    authentication_classes = (TokenAuthentication,)
    #permission_classes = [IsAuthenticated]

class MentorMenteeViewSet(viewsets.ModelViewSet):
    queryset = MentorMentees.objects.all()
    serializer_class = MentorMenteeSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class MilestoneViewSet(viewsets.ModelViewSet):
    queryset = Milestones.objects.all()
    serializer_class = MilestoneSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class EventViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class EventMenteeViewSet(viewsets.ModelViewSet):
    queryset = EventMentees.objects.all()
    serializer_class = EventMenteesSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class SpecialtyViewSet(viewsets.ModelViewSet):
    queryset = Specialties.objects.all()
    serializer_class = SpecialtySerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interests.objects.all()
    serializer_class = InterestSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]
    
class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]

class MessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessages.objects.all()
    serializer_class = MessageSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]



















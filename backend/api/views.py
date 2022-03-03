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
    def list(self,request):
        queryset = User.objects.all()
        serializer_class = UserSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = UserSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = User.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = UserSerializer(article)
        return Response(serializer_class.data)

class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer
    def list(self,request):
        queryset = UserDetails.objects.all()
        serializer_class = UserDetailSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = UserDetailSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = UserDetails.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = UserDetailSerializer(article)
        return Response(serializer_class.data)

class MentorMenteeViewSet(viewsets.ModelViewSet):
    queryset = MentorMentees.objects.all()
    serializer_class = MentorMenteeSerializer
    def list(self,request):
        queryset = MentorMentees.objects.all()
        serializer_class = MentorMenteeSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = MentorMenteeSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = MentorMentees.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = MentorMenteeSerializer(article)
        return Response(serializer_class.data)

class MilestoneViewSet(viewsets.ModelViewSet):
    queryset = Milestones.objects.all()
    serializer_class = MilestoneSerializer
    def list(self,request):
        queryset = Milestones.objects.all()
        serializer_class = MilestoneSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = MilestoneSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Milestones.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = MilestoneSerializer(article)
        return Response(serializer_class.data)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventSerializer
    def list(self,request):
        queryset = Events.objects.all()
        serializer_class = EventSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = EventSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Events.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = EventSerializer(article)
        return Response(serializer_class.data)

class EventMenteeViewSet(viewsets.ModelViewSet):
    queryset = EventMentees.objects.all()
    serializer_class = EventMenteesSerializer
    def list(self,request):
        queryset = EventMentees.objects.all()
        serializer_class = EventMenteesSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = EventMenteesSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = EventMentees.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = EventMenteesSerializer(article)
        return Response(serializer_class.data)

class SpecialtyViewSet(viewsets.ModelViewSet):
    queryset = Specialties.objects.all()
    serializer_class = SpecialtySerializer
    def list(self,request):
        queryset = Specialties.objects.all()
        serializer_class = SpecialtySerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = SpecialtySerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Specialties.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = SpecialtySerializer(article)
        return Response(serializer_class.data)

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interests.objects.all()
    serializer_class = InterestSerializer
    def list(self,request):
        queryset = Interests.objects.all()
        serializer_class = InterestSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = InterestSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Interests.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = InterestSerializer(article)
        return Response(serializer_class.data)

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
    def list(self,request):
        queryset = Reviews.objects.all()
        serializer_class = ReviewsSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = ReviewsSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Reviews.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = ReviewsSerializer(article)
        return Response(serializer_class.data)

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    def list(self,request):
        queryset = Chat.objects.all()
        serializer_class = ChatSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = ChatSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = Chat.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = ChatSerializer(article)
        return Response(serializer_class.data)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessages.objects.all()
    serializer_class = MessageSerializer
    def list(self,request):
        queryset = ChatMessages.objects.all()
        serializer_class = MessageSerializer(queryset,many=True)
        return Response(serializer_class.data)
    def create(self,request):
        serializer_class = MessageSerializer(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data,status = status.HTTP_201_CREATED)
        return Response(serializer_class.data,errors = status.HTTP_400_BAD_REQUEST)
    def retrieve(self,request,ph=None):
        queryset = ChatMessages.objects.all()
        article = get_object_or_404(queryset,pk=id)
        serializer_class = MessageSerializer(article)
        return Response(serializer_class.data)




















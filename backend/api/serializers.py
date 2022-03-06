from rest_framework import serializers
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
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password','email']

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['userID','department','is_mentor']


class MentorMenteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorMentees
        fields = ['pairingID', 'mentorID', 'menteeID']

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestones
        fields = ['id', 'pairingID','description', 'date_completed']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['eventID', 'mentorID', 'topic','description','start_time','end_time','location']


class EventMenteesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventMentees
        fields = ['id','menteeID', 'eventID']

class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialties
        fields = ['id', 'userID', 'specialty']


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interests
        fields = ['id', 'userID', 'interest']


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['id', 'reviewerID', 'reviewedID','rating','text']


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['chatID', 'userID1', 'userID2']


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessages
        fields = ['id', 'chatID', 'userID','content','date_sent']




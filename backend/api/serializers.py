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
        fields = ['id', 'username', 'password','email', 'first_name', 'last_name']

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class authToken(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ['key','user']
    

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['userID','department','is_mentor', 'pronouns', 'title']


class MentorMenteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorMentees
        fields = ['mentorID', 'menteeID']

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestones
        fields = ['id', 'pairingID','description', 'date_completed']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['mentorID', 'topic','description','start_time','end_time','location']


class EventMenteesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventMentees
        fields = ['id','menteeID', 'eventID']

class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialties
        fields = ['userID', 'topic', 'description']


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interests
        fields = ['userID', 'topic', 'description']


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['id', 'reviewerID', 'reviewedID','rating','description']


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['chatID', 'userID1', 'userID2']


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessages
        fields = ['id', 'chatID', 'userID','content','date_sent']



class UpdateProfileUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email', 'first_name', 'last_name']

class UpdateProfileUserDetails(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['department', 'pronouns']

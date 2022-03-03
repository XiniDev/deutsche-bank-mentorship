from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.


class UserDetails(models.Model):
    userID =  models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    department = models.CharField(max_length=50)
    is_mentor = models.BooleanField()


class MentorMentees(models.Model):
    mentorID = models.ForeignKey(UserDetails, related_name = "mentor", on_delete=models.CASCADE)
    menteeID = models.ForeignKey(UserDetails, related_name = "mentee", on_delete=models.CASCADE)

class Milestones(models.Model):
    pairingID = models.ForeignKey(MentorMentees, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    date_completed = models.DateTimeField(blank=True, null=True)


class Events(models.Model):
    mentorID = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    topic = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=50)


class EventMentees(models.Model):
    menteeID = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    eventID = models.ForeignKey(Events, on_delete=models.CASCADE)


class Specialties(models.Model):
    userID = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=50)


class Interests(models.Model):
    userID = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    interest = models.CharField(max_length=50)


class Reviews(models.Model):
    reviewerID = models.ForeignKey(UserDetails, related_name = "reviewer", on_delete=models.CASCADE)
    reviewedID = models.ForeignKey(UserDetails, related_name = "reviewee", on_delete=models.CASCADE)
    rating = models.SmallIntegerField()
    text = models.CharField(max_length=200)


class Chat(models.Model):
    userID1 = models.ForeignKey(UserDetails, related_name = "user1", on_delete=models.CASCADE)
    userID2 = models.ForeignKey(UserDetails, related_name = "user2", on_delete=models.CASCADE)

class ChatMessages(models.Model):
    chatID = models.ForeignKey(Chat, on_delete=models.CASCADE)
    userID = models.ForeignKey(UserDetails, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    date_sent = models.DateTimeField()

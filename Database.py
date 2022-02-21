from django.db import models

class Users(models.Model):
    userID = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password_salt = models.CharField(max_length=100)
    email_salt = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    picture_location = models.CharField(max_length=50)
    is_mentor = models.SmallIntegerField()


class MentorMentees(models.Model):
    mentorID = models.ForeignKey(Users, on_delete=models.CASCADE)
    menteeID = models.ForeignKey(Users, on_delete=models.CASCADE)

class Events(models.Model):
    eventID = models.BigAutoField(primary_key=True)
    mentorID = models.ForeignKey(Users, on_delete=models.CASCADE)
    topic = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=50)

class EventMentees(models.Model):
    menteeID = models.ForeignKey(Users, on_delete=models.CASCADE)
    eventID = models.ForeignKey(Events, on_delete=models.CASCADE)

class Specialties(models.Model):
    userID = models.ForeignKey(Users, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=50)

class Interests(models.Model):
    userID = models.ForeignKey(Users, on_delete=models.CASCADE)
    interest = models.CharField(max_length=50)

class Reviews(models.Model):
    reviewerID = models.ForeignKey(Users, on_delete=models.CASCADE)
    reviewedID = models.ForeignKey(Users, on_delete=models.CASCADE)
    rating = models.SmallIntegerField()
    text = models.CharField(max_length=200)

class Chat(models.Model):
    chatID = models.BigAutoField(primary_key=True)
    userID1 = models.ForeignKey(Users, on_delete=models.CASCADE)
    userID2 = models.ForeignKey(Users, on_delete=models.CASCADE)

class ChatMessages(models.Model):
    messageID = models.BigAutoField(primary_key=True)
    chatID = models.ForeignKey(Chat, on_delete=models.CASCADE)
    userID = models.ForeignKey(Events, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    date_sent = models.DateTimeField()
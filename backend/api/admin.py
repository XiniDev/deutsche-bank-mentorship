from django.contrib import admin
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
# Register your models here.

#admin.site.register(Article)

@admin.register(UserDetails)
class UserDetails(admin.ModelAdmin):
    list_filter = ("userID","department","is_mentor")
    list_display = ("userID","department","pronouns","title","is_mentor")
@admin.register(MentorMentees)
class MentorMentees(admin.ModelAdmin):
    list_filter = ("mentorID","menteeID")
    list_display = ("mentorID","menteeID")
@admin.register(Milestones)
class Milestones(admin.ModelAdmin):
    list_filter = ("pairingID","date_completed")
    list_display = ("pairingID","description","date_completed")
@admin.register(Events)
class Events(admin.ModelAdmin):
    list_filter = ("mentorID","topic","start_time","end_time","location")
    list_display = ("mentorID","topic","description","start_time","end_time","location")
@admin.register(EventMentees)
class EventMentees(admin.ModelAdmin):
    list_filter = ("menteeID","eventID")
    list_display = ("menteeID","eventID")
@admin.register(Specialties)
class Specialties(admin.ModelAdmin):
    list_filter = ("userID","specialty")
    list_display = ("userID","specialty")
@admin.register(Interests)
class Interests(admin.ModelAdmin):
    list_filter = ("userID","interest")
    list_display = ("userID","interest")
@admin.register(Reviews)
class Reviews(admin.ModelAdmin):
    list_filter = ("reviewerID","reviewedID","rating")
    list_display = ("reviewerID","reviewedID","rating","description")
@admin.register(Chat)
class Chat(admin.ModelAdmin):
    list_filter = ("userID1","userID2")
    list_display = ("userID1","userID2")
@admin.register(ChatMessages)
class ChatMessages(admin.ModelAdmin):
    list_filter = ("chatID","userID","date_sent")
    list_display = ("chatID","userID","content","date_sent")

from django.core.management.base import BaseCommand
import unittest
from django.test import TestCase
from django.test import SimpleTestCase
from django.urls import reverse,resolve
from api.views import *
from api.models import *
class Command(BaseCommand):
    def handle(self, **options):
        suite = unittest.TestLoader().loadTestsFromTestCase(TestConstraints)
        unittest.TextTestRunner().run(suite)
        suite = unittest.TestLoader().loadTestsFromTestCase(TestUrls)
        unittest.TextTestRunner().run(suite)

class TestConstraints(TestCase):
    def setUp(self):
        try:
            User.objects.get(id=1)
            #print("User Exists")
        except:
            #print("User No Exists")
            test = User(
                username="zak",
                password="pbkdf2_sha256$320000$iQ3NjYl4VKG2LdlDP5gXPR$LLIPSLWWCS9cEj0+yDjHhtsHdyt/Jk6q2uORd+Sbm7M=",
                first_name="zak",
                last_name="glenn",
                email="zak@gmail.com",
                is_superuser=0,
                is_staff=0)
            test.save()
            test = User(
                username="rattus",
                password="pbkdf2_sha256$320000$44v6mNZoqtTTI4RTeLXYIx$gefKHTEWbfGNBkzPaQC3R6YQ2bOZvTf1sBOD6NGkdzI=",
                first_name="rattus",
                last_name="rattus",
                email="rattus@gmail.com",
                is_superuser=0,
                is_staff=0)
            test.save()
        try:
            UserDetails.objects.get(id=1)
            #print("UserDetail Exists")
        except:
            #print("UserDetail No Exists")
            test = UserDetails(userID = User.objects.get(id=1),
                        department = "Tax Evasion",
                        is_mentor = True,
                        pronouns = "He",
                        title = "Mr")
            test.save()
            test = UserDetails(userID = User.objects.get(id=2),
                        department = "CEO",
                        is_mentor = False,
                        pronouns = "He",
                        title = "Mrs")
            test.save()
        try:
            MentorMentees.objects.get(id=1)
            #print("MM Exists")
        except:
            #print("MM No Exists")
            test =  MentorMentees(mentorID = UserDetails.objects.get(id=1), 
                    menteeID = UserDetails.objects.get(id=2))
            test.save()
        try:
            Milestones.objects.get(id=1)
            #print("MS Exists")
        except:
            #print("MS No Exists")
            test =  Milestones(pairingID = MentorMentees.objects.get(id=1), 
                    description="Jumping is the act of elevating ones-self",
                    date_completed = "2022-03-07 16:07:53.564711")
            test.save()
        try:
            Events.objects.get(id=1)
            #print("E Exists")
        except:
            #print("E No Exists")
            test =  Events(mentorID = UserDetails.objects.get(id=1), 
                    topic="Jumping",
                    description="Jumping is the act of elevating ones-self",
                    start_time= "2022-03-07 16:07:53.564711",
                    end_time= "2022-05-07 16:07:53.564711",
                    location = "home")
            test.save()
        try:
            EventMentees.objects.get(id=1)
            #print("Em Exists")
        except:
            #print("Em No Exists")
            test =  EventMentees(menteeID = UserDetails.objects.get(id=2), 
                    eventID = Events.objects.get(id=2))
            test.save()
        try:
            Specialties.objects.get(id=1)
            #print("S Exists")
        except:
            #print("S No Exists")
            test =  Specialties(userID = UserDetails.objects.get(id=1), 
                    topic="Jumping",
                    description="Jumping is the act of elevating ones-self")
            test.save()
            test =  Specialties(userID = UserDetails.objects.get(id=2), 
                    topic="Falling",
                    description="falling is the act of de-elevating ones-self")
            test.save()
        try:
            Interests.objects.get(id=1)
            #print("I Exists")
        except:
            #print("I No Exists")
            test =  Interests(userID = UserDetails.objects.get(id=1), 
                    topic="Falling",
                    description="falling is the act of de-elevating ones-self")
            test.save()
            test =  Interests(userID = UserDetails.objects.get(id=2), 
                    topic="Jumping",
                    description="Jumping is the act of elevating ones-self")
            test.save()
        try:
            Reviews.objects.get(id=1)
            #print("R Exists")
        except:
            #print("R No Exists")
            test =  Reviews(reviewerID = UserDetails.objects.get(id=2), 
                    reviewedID = UserDetails.objects.get(id=1),
                    rating=5,
                    description="Best Teacher Ever")
            test.save()

    def test_mismatch(self):
        details = UserDetails.objects.all()
        for d in details:
            user = User.objects.get(username = str(d.userID))
            self.assertEquals(user.id,d.id)
        print("All user details are equivalent to the user with equal ID")

    def test_mentor_event(self):
        event = Events.objects.all()
        for e in event:
            user = User.objects.get(username = str(e.mentorID))
            details = UserDetails.objects.get(id = user.id)
            self.assertEquals(details.is_mentor,True)
        print("All events are run by a mentor")

    def test_event_attendance(self):
        event = Events.objects.all()
        for e in event:
            try:
                ementee = EventMentees.objects.get(eventID = e.id)
            except EventMentees.DoesNotExist:
                print("Meeting " + str(e) + " does not have any attendees") 
                self.assertFalse(True)
        print("All events have at least one attendee")

    def test_valid_event_attendance(self):
        event = Events.objects.all()
        for e in event:
            ementee = EventMentees.objects.filter(eventID = e.id)
            for m in ementee:
                user = User.objects.get(username=str(m.menteeID))
                interests = Interests.objects.filter(userID=user.id)
                match = False
                for i in interests:
                    if e.topic == i.topic:
                        match = True
                if not match:
                    print("Meeting " + str(e) + " does not interest mentee " + str(user.username))
                    self.assertFalse(True)
    print("All event attendees are interested in the topic")

    def test_mentor_pairing(self):
        pairing = MentorMentees.objects.all()
        for p in pairing:
            user = User.objects.get(username = str(p.mentorID))
            details = UserDetails.objects.get(id = user.id)
            self.assertEquals(details.is_mentor,True)
        print("All mentors are stated as such in their details")
    def test_different_department(self):
        pairing = MentorMentees.objects.all()
        for p in pairing:
            user = User.objects.get(username = str(p.mentorID))
            details1 = UserDetails.objects.get(id = user.id)
            user = User.objects.get(username = str(p.menteeID))
            details2 = UserDetails.objects.get(id = user.id)
            self.assertNotEquals(details1.department,details2.department)
        print("No mentor mentee pairings share a department")
    def test_matching_interest(self):
        pairing = MentorMentees.objects.all()
        for p in pairing:
            mentor = User.objects.get(username = str(p.mentorID))
            specialties = Specialties.objects.filter(userID = mentor.id)
            mentee = User.objects.get(username = str(p.menteeID))
            interests = Interests.objects.filter(userID = mentee.id)
            match = False
            for i in specialties:
                for j in interests:
                    if i.topic == j.topic:
                        match = True
            if not match:
                print("A mentee is matched with an incompatible mentor")
                self.assertFalse(True)
        print("All mentor mentee pairings have a matching specialty / interest")

    def test_valid_review(self):
        review = Reviews.objects.all()
        for r in review:
            valid = False
            reviewer = User.objects.get(username = str(r.reviewerID))
            reviewee = User.objects.get(username = str(r.reviewedID))
            pairing = MentorMentees.objects.filter(mentorID = reviewer.id)
            for p in pairing:
                try:
                    EventMentees.objects.get(menteeID = reviewee.id)
                    valid = True
                except EventMentees.DoesNotExist:
                    pass

            pairing = MentorMentees.objects.filter(mentorID = reviewee.id)
            for p in pairing:
                try:
                    EventMentees.objects.get(menteeID = reviewer.id)
                    valid = True
                except EventMentees.DoesNotExist:
                    pass
            if not valid:
                print("A user has reviewed a user they are not paired with b")
                self.assertFalse(True)
        print("Users have only reviewed users they are paired with")

class TestUrls(SimpleTestCase):
    def test_userslist_url_is_resolved(self):
        url = reverse('api:users-list')
        self.assertEquals(resolve(url).route,'api/users/$')

    def test_detailslist_url_is_resolved(self):    
        url = reverse('api:userDetails-list')
        self.assertEquals(resolve(url).route,'api/userDetails/$')

    def test_pairingslist_url_is_resolved(self): 
        url = reverse('api:pairings-list')
        self.assertEquals(resolve(url).route,'api/pairings/$')

    def test_milestoneslist_url_is_resolved(self): 
        url = reverse('api:milestones-list')
        self.assertEquals(resolve(url).route,'api/milestones/$')

    def test_eventslist_url_is_resolved(self): 
        url = reverse('api:events-list')
        self.assertEquals(resolve(url).route,'api/events/$')

    def test_attendeeslist_url_is_resolved(self): 
        url = reverse('api:attendees-list')
        self.assertEquals(resolve(url).route,'api/attendees/$')

    def test_specialtieslist_url_is_resolved(self): 
        url = reverse('api:specialties-list')
        self.assertEquals(resolve(url).route,'api/specialties/$')

    def test_interestslist_url_is_resolved(self): 
        url = reverse('api:interests-list')
        self.assertEquals(resolve(url).route,'api/interests/$')

    def test_reviewslist_url_is_resolved(self): 
        url = reverse('api:reviews-list')
        self.assertEquals(resolve(url).route,'api/reviews/$')

    def test_chatslist_url_is_resolved(self): 
        url = reverse('api:chats-list')
        self.assertEquals(resolve(url).route,'api/chats/$')

    def test_messageslist_url_is_resolved(self): 
        url = reverse('api:messages-list')
        self.assertEquals(resolve(url).route,'api/messages/$')

    def test_userIDlist_url_is_resolved(self): 
        url = reverse('api:userID-list')
        self.assertEquals(resolve(url).route,'api/userID/$')

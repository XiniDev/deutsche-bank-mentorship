from django.test import TestCase
from django.test import SimpleTestCase
from django.urls import reverse,resolve
from api.views import *
from api.models import *

class TestConstraints(TestCase):
    def setUp(self):
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
        test =  MentorMentees(mentorID = UserDetails.objects.get(id=1), 
                menteeID = UserDetails.objects.get(id=2))
        test.save()

        test =  Milestones(pairingID = MentorMentees.objects.get(id=1), 
                description="Jumping is the act of elevating ones-self",
                date_completed = "2022-03-07 16:07:53.564711")
        test.save()

        test =  Events(mentorID = UserDetails.objects.get(id=1), 
                topic="Jumping",
                description="Jumping is the act of elevating ones-self",
                start_time= "2022-03-07 16:07:53.564711",
                end_time= "2022-05-07 16:07:53.564711",
                location = "home")
        test.save()

        test =  EventMentees(menteeID = UserDetails.objects.get(id=2), 
                eventID = Events.objects.get(id=1))
        test.save()

        test =  Specialties(userID = UserDetails.objects.get(id=1), 
                specialty="Jumping",
                description="Jumping is the act of elevating ones-self")
        test.save()
        test =  Specialties(userID = UserDetails.objects.get(id=2), 
                specialty="Falling",
                description="falling is the act of de-elevating ones-self")
        test.save()

        test =  Interests(userID = UserDetails.objects.get(id=1), 
                interest="Falling",
                description="falling is the act of de-elevating ones-self")
        test.save()
        test =  Interests(userID = UserDetails.objects.get(id=2), 
                interest="Jumping",
                description="Jumping is the act of elevating ones-self")
        test.save()

        test =  Reviews(reviewerID = UserDetails.objects.get(id=2), 
                reviewedID = UserDetails.objects.get(id=1),
                rating=5,
                description="Best Teacher Ever")
        
    def test_mismatch(self):
        details = UserDetails.objects.all()
        for d in details:
            user = User.objects.get(username = str(d.userID))
            self.assertEquals(user.id,d.id)

    def test_mentor_event(self):
        event = Events.objects.all()
        for e in event:
            user = User.objects.get(username = str(e.mentorID))
            details = UserDetails.objects.get(id = user.id)
            self.assertEquals(details.is_mentor,True)

    def test_event_attendance(self):
        event = Events.objects.all()
        for e in event:
            try:
                ementee = EventMentees.objects.get(eventID = e.id)
            except EventMentees.DoesNotExist:
                self.assertFalse(True)

    def test_valid_event_attendance(self):
        event = Events.objects.all()
        for e in event:
            ementee = EventMentees.objects.filter(eventID = e.id)
            for m in ementee:
                user = User.objects.get(username=str(m.menteeID))
                interests = Interests.objects.filter(userID=user.id)
                match = False
                for i in interests:
                    if e.topic == i.interest:
                        match = True
                if not match:
                    self.assertFalse(True)

    def test_mentor_pairing(self):
        pairing = MentorMentees.objects.all()
        for p in pairing:
            user = User.objects.get(username = str(p.mentorID))
            details = UserDetails.objects.get(id = user.id)
            self.assertEquals(details.is_mentor,True)

    def test_different_department(self):
        pairing = MentorMentees.objects.all()
        for p in pairing:
            user = User.objects.get(username = str(p.mentorID))
            details1 = UserDetails.objects.get(id = user.id)
            user = User.objects.get(username = str(p.menteeID))
            details2 = UserDetails.objects.get(id = user.id)
            self.assertNotEquals(details1.department,details2.department)

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
                    if i.specialty == j.interest:
                        match = True
            if not match:
                self.assertFalse(True)

    def test_valid_review(self):
        review = Reviews.objects.all()
        for r in review:
            reviewer = User.objects.get(username = str(r.reviewerID))
            reviewee = User.objects.get(username = str(r.revieweeID))
            pairing = MentorMentees.objects.filter(mentorID = reviewer.id)
            number = 0
            for p in pairing:
                try:
                    EventMentees.objects.get(menteeID = reviewee.id)
                    number += 1
                except EventMentees.DoesNotExist:
                    pass
            pairing = MentorMentees.objects.filter(mentorID = reviewee.id)
            for p in pairing:
                try:
                    EventMentees.objects.get(menteeID = reviewer.id)
                    number += 1
                except EventMentees.DoesNotExist:
                    pass
            if number != 1:
                self.assertFalse(True)



class TestUrls(SimpleTestCase):
    def test_list_url_is_resolved(self):
        
        url = reverse('api:users-list')
        self.assertEquals(resolve(url).route,'api/users/$')
        url = reverse('api:userDetails-list')
        self.assertEquals(resolve(url).route,'api/userDetails/$')
        url = reverse('api:pairings-list')
        self.assertEquals(resolve(url).route,'api/pairings/$')
        url = reverse('api:milestones-list')
        self.assertEquals(resolve(url).route,'api/milestones/$')
        url = reverse('api:events-list')
        self.assertEquals(resolve(url).route,'api/events/$')
        url = reverse('api:attendees-list')
        self.assertEquals(resolve(url).route,'api/attendees/$')
        url = reverse('api:specialties-list')
        self.assertEquals(resolve(url).route,'api/specialties/$')
        url = reverse('api:interests-list')
        self.assertEquals(resolve(url).route,'api/interests/$')
        url = reverse('api:reviews-list')
        self.assertEquals(resolve(url).route,'api/reviews/$')
        url = reverse('api:chats-list')
        self.assertEquals(resolve(url).route,'api/chats/$')
        url = reverse('api:messages-list')
        self.assertEquals(resolve(url).route,'api/messages/$')
        url = reverse('api:userID-list')
        self.assertEquals(resolve(url).route,'api/userID/$')


test = User(username="zak",
            password="pbkdf2_sha256$320000$iQ3NjYl4VKG2LdlDP5gXPR$LLIPSLWWCS9cEj0+yDjHhtsHdyt/Jk6q2uORd+Sbm7M=",
            first_name="zak",
            last_name="glenn",
            email="zak@gmail.com",
            is_superuser=0,
            is_staff=0)
test.save()
test = User(username="rattus",
            password="pbkdf2_sha256$320000$44v6mNZoqtTTI4RTeLXYIx$gefKHTEWbfGNBkzPaQC3R6YQ2bOZvTf1sBOD6NGkdzI=",
            first_name="rattus",
            last_name="rattus",
            email="rattus@gmail.com",
            is_superuser=0,
            is_staff=0)
test.save()

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

test =  MentorMentees(mentorID = UserDetails.objects.get(id=1), 
                menteeID = UserDetails.objects.get(id=2))
test.save()

test =  Milestones(pairingID = MentorMentees.objects.get(id=1), 
                description="Jumping is the act of elevating ones-self",
                date_completed = "2022-03-07 16:07:53.564711")
test.save()

test =  Events(mentorID = UserDetails.objects.get(id=1), 
                topic="Jumping",
                description="Jumping is the act of elevating ones-self",
                start_time= "2022-03-07 16:07:53.564711",
                end_time= "2022-05-07 16:07:53.564711",
                location = "home")
test.save()

test =  EventMentees(menteeID = UserDetails.objects.get(id=1), 
                eventID = Events.objects.get(id=1))
test.save()

test =  Specialties(userID = UserDetails.objects.get(id=1), 
                specialty="Jumping",
                description="Jumping is the act of elevating ones-self")
test.save()
test =  Specialties(userID = UserDetails.objects.get(id=2), 
                specialty="Falling",
                description="falling is the act of de-elevating ones-self")
test.save()

test =  Interests(userID = UserDetails.objects.get(id=1), 
                interest="Falling",
                description="falling is the act of de-elevating ones-self")
test.save()
test =  Interests(userID = UserDetails.objects.get(id=2), 
                interest="Jumping",
                description="Jumping is the act of elevating ones-self")
test.save()

test =  Reviews(reviewerID = UserDetails.objects.get(id=2), 
                reviewedID = UserDetails.objects.get(id=1),
                rating=5,
                description="Best Teacher Ever")
test.save()






   

    
# Create your tests here.

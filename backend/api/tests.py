from django.test import TestCase
from django.test import SimpleTestCase
from django.urls import reverse,resolve
from api.views import *
from api.models import *

try:
    User.objects.get(id=1)
except:
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
                    topic="Jumping",
                    description="Jumping is the act of elevating ones-self")
    test.save()
    test =  Specialties(userID = UserDetails.objects.get(id=2), 
                    topic="Falling",
                    description="falling is the act of de-elevating ones-self")
    test.save()

    test =  Interests(userID = UserDetails.objects.get(id=1), 
                    topic="Falling",
                    description="falling is the act of de-elevating ones-self")
    test.save()
    test =  Interests(userID = UserDetails.objects.get(id=2), 
                    topic="Jumping",
                    description="Jumping is the act of elevating ones-self")
    test.save()

    test =  Reviews(reviewerID = UserDetails.objects.get(id=2), 
                    reviewedID = UserDetails.objects.get(id=1),
                    rating=5,
                    description="Best Teacher Ever")
    test.save()

    test = Mentors(userID = UserDetails.objects.get(id=1),)
    test.save()
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

    
     
class TestUser(TestCase):
    
    def setUp(self):
        User.objects.create(username="zak",
            password="pbkdf2_sha256$320000$iQ3NjYl4VKG2LdlDP5gXPR$LLIPSLWWCS9cEj0+yDjHhtsHdyt/Jk6q2uORd+Sbm7M=",
            first_name="zak",
            last_name="glenn",
            email="zak@gmail.com",
            is_superuser=0,
            is_staff=0)
        User.objects.create(username="rattus",
            password="pbkdf2_sha256$320000$44v6mNZoqtTTI4RTeLXYIx$gefKHTEWbfGNBkzPaQC3R6YQ2bOZvTf1sBOD6NGkdzI=",
            first_name="rattus",
            last_name="rattus",
            email="rattus@gmail.com",
            is_superuser=0,
            is_staff=0)
        UserDetails.objects.create(userID = User.objects.get(id=1),
                            department = "Tax Evasion",
                            is_mentor = True,
                            pronouns = "He",
                            title = "Mr")

        UserDetails.objects.create(userID = User.objects.get(id=2),
                            department = "CEO",
                            is_mentor = False,
                            pronouns = "He",
                            title = "Mrs")


        MentorMentees.objects.create(mentorID = UserDetails.objects.get(id=1), 
                        menteeID = UserDetails.objects.get(id=2))


        Milestones.objects.create(pairingID = MentorMentees.objects.get(id=1), 
                        description="Jumping is the act of elevating ones-self",
                        date_completed = "2022-03-07 16:07:53.564711")


        Events.objects.create(mentorID = UserDetails.objects.get(id=1), 
                        topic="Jumping",
                        description="Jumping is the act of elevating ones-self",
                        start_time= "2022-03-07 16:07:53.564711",
                        end_time= "2022-05-07 16:07:53.564711",
                        location = "home")


        EventMentees.objects.create(menteeID = UserDetails.objects.get(id=1), 
                        eventID = Events.objects.get(id=1))


        Specialties.objects.create(userID = UserDetails.objects.get(id=1), 
                        topic="Jumping",
                        description="Jumping is the act of elevating ones-self")

        Specialties.objects.create(userID = UserDetails.objects.get(id=2), 
                        topic="Falling",
                        description="falling is the act of de-elevating ones-self")


        Interests.objects.create(userID = UserDetails.objects.get(id=1), 
                        topic="Falling",
                        description="falling is the act of de-elevating ones-self")

        Interests.objects.create(userID = UserDetails.objects.get(id=2), 
                        topic="Jumping",
                        description="Jumping is the act of elevating ones-self")


        Reviews.objects.create(reviewerID = UserDetails.objects.get(id=2), 
                        reviewedID = UserDetails.objects.get(id=1),
                        rating=5,
                        description="Best Teacher Ever")

    def test_user_added(self):
        user = User.objects.get(id=1)
        self.assertEqual(user.username,"zak")
       
    def test_Otheruser_added(self):
        user = User.objects.get(id=2)
        self.assertEqual(user.username,"rattus")
    
    
    
    




        







   

    
# Create your tests here.

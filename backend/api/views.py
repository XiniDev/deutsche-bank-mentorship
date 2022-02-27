
from .models import Example
from .serializers import ExampleSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    
    serializer_class = UserSerializer

class ExampleViewSet(viewsets.ModelViewSet):
    queryset = Example.objects.all()
    serializer_class = ExampleSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)























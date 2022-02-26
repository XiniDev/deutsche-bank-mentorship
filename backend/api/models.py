from django.db import models


# Create your models here.


class Example(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    extrawords = models.TextField()


    def __str__(self):
        return self.title

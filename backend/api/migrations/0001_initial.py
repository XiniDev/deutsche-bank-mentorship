# Generated by Django 4.0.3 on 2022-03-14 05:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='MentorMentees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(max_length=50)),
                ('is_mentor', models.BooleanField()),
                ('pronouns', models.CharField(max_length=25)),
                ('title', models.CharField(max_length=25)),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Specialties',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=200)),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.userdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.SmallIntegerField()),
                ('description', models.CharField(max_length=200)),
                ('reviewedID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviewee', to='api.userdetails')),
                ('reviewerID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviewer', to='api.userdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Milestones',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100)),
                ('date_completed', models.DateTimeField(blank=True, null=True)),
                ('pairingID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.mentormentees')),
            ],
        ),
        migrations.AddField(
            model_name='mentormentees',
            name='menteeID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mentee', to='api.userdetails'),
        ),
        migrations.AddField(
            model_name='mentormentees',
            name='mentorID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mentor', to='api.userdetails'),
        ),
        migrations.CreateModel(
            name='Interests',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=200)),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.userdetails')),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=200)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('location', models.CharField(max_length=50)),
                ('mentorID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.userdetails')),
            ],
        ),
        migrations.CreateModel(
            name='EventMentees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eventID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.events')),
                ('menteeID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.userdetails')),
            ],
        ),
        migrations.CreateModel(
            name='ChatMessages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=200)),
                ('date_sent', models.DateTimeField()),
                ('chatID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.chat')),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.userdetails')),
            ],
        ),
        migrations.AddField(
            model_name='chat',
            name='userID1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user1', to='api.userdetails'),
        ),
        migrations.AddField(
            model_name='chat',
            name='userID2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user2', to='api.userdetails'),
        ),
    ]

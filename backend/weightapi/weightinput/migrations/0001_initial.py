# Generated by Django 2.1.7 on 2019-03-03 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BodySize',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lower_bust', models.FloatField(null=True)),
                ('upper_bust', models.FloatField(null=True)),
                ('lower_waist', models.FloatField(null=True)),
                ('upper_waist', models.FloatField(null=True)),
                ('lower_hips', models.FloatField(null=True)),
                ('upper_hips', models.FloatField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Cloth',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.BodySize')),
            ],
        ),
        migrations.CreateModel(
            name='Designer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='SizeCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=255, unique=True)),
                ('size', models.CharField(max_length=255)),
                ('lower_bust', models.FloatField(null=True)),
                ('upper_bust', models.FloatField(null=True)),
                ('lower_waist', models.FloatField(null=True)),
                ('upper_waist', models.FloatField(null=True)),
                ('lower_hips', models.FloatField(null=True)),
                ('upper_hips', models.FloatField(null=True)),
                ('designer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.Designer')),
            ],
        ),
        migrations.CreateModel(
            name='SizeHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('body_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.BodySize')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('body_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.BodySize')),
            ],
        ),
        migrations.AddField(
            model_name='sizehistory',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.User'),
        ),
        migrations.AddField(
            model_name='cloth',
            name='designer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weightinput.Designer'),
        ),
    ]
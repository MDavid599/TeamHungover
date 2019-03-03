from django.db import models

# Create your models here.

class BodySize(models.Model):
    lower_bust = models.FloatField(null=True)
    upper_bust = models.FloatField(null=True)
    lower_waist = models.FloatField(null=True)
    upper_waist = models.FloatField(null=True)
    lower_hips = models.FloatField(null=True)
    upper_hips = models.FloatField(null=True)

    def __str__(self):
        return "{0} - {1}   {2} - {3}    {4} - {5}".format(
            self.lower_bust,
            self.upper_bust,
            self.lower_waist,
            self.upper_waist,
            self.lower_hips,
            self.upper_hips
        )
    
    def set_size(lower_bust, upper_bust, lower_waist, upper_waist, lower_hips, upper_hips):
        if lower_bust is not None:
            self.lower_bust = lower_bust
            self.upper_bust = upper_bust
        if lower_waist is not None:
            self.lower_waist = lower_waist
            self.upper_waist = upper_waist
        if lower_hips is not None:
            self.lower_hips = lower_hips
            self.upper_hips = upper_hips

class Designer(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class User(models.Model):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    body_size = models.ForeignKey(
        'BodySize',
        on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.name

    def get_present_recommendations(self):
        top_result = Cloth.objects.filter(
            body_size.lower_waist = 0,
            body_size.lower_hips = 0
        ).exclude(
            body_size.lower_bust > self.body_size.lower_bust + 0.5,
            body_size.upper_bust + 0.5 < self.body_size.upper_bust
        )
        bottom_result = Cloth.objects.filter(
            body_size.lower_bust = 0
        ).exclude(
            body_size.lower_waist > self.body_size.lower_waist + 0.5,
            body_size.upper_waist + 0.5 < self.body_size.upper_waist,
            body_size.lower_hips > self.body_size.lower_hips + 0.5,
            body_size.upper_hips + 0.5 < self.body_size.upper_hips
        )
        dress_result = Cloth.objects.exclude(
            body_size.lower_bust > self.body_size.lower_bust + 0.5,
            body_size.upper_bust + 0.5 < self.body_size.upper_bust,
            body_size.lower_waist > self.body_size.lower_waist + 0.5,
            body_size.upper_waist + 0.5 < self.body_size.upper_waist,
            body_size.lower_hips > self.body_size.lower_hips + 0.5,
            body_size.upper_hips + 0.5 < self.body_size.upper_hips
        )

        return [dress_result, top_result, bottom_result]


class SizeHistory(models.Model):
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE
    )
    body_size = models.ForeignKey(
        'BodySize',
        on_delete=models.CASCADE
    )
    date = models.DateField()

    def __str__(self):
        return "{0} {1} {2}".format(self.user.name, self.date, self.body_size)

class Cloth(models.Model):
    designer = models.ForeignKey(
        'Designer',
        on_delete=models.CASCADE
    )
    body_size = models.ForeignKey(
        'BodySize',
        on_delete=models.CASCADE
    )
    store_item_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    link_url = models.TextField()
    image_url = models.TextField()
    
    def __str__(self):
        return "{0} {1}".format(self.designer, self.body_size)

class SizeCategory(models.Model):
    designer = models.ForeignKey(
        'Designer',
        on_delete=models.CASCADE
    )
    category_name = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    lower_bust = models.FloatField(null=True)
    upper_bust = models.FloatField(null=True)
    lower_waist = models.FloatField(null=True)
    upper_waist = models.FloatField(null=True)
    lower_hips = models.FloatField(null=True)
    upper_hips = models.FloatField(null=True)

    def __str__(self):
        return "{0}: {1}\nsize: {2}\n{3} - {4}   {5} - {6}   {7} - {8}".format(
            self.designer.name,
            self.category_name,
            self.size,
            self.lower_bust,
            self.upper_bust,
            self.lower_waist,
            self.upper_waist,
            self.lower_hips,
            self.upper_hips
        )
    
    def get_size(self):
        return [
            self.lower_bust,
            self.upper_bust,
            self.lower_waist,
            self.upper_waist,
            self.lower_hips,
            self.upper_hips
        ]

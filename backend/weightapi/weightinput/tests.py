from django.test import TestCase
from .models import User, BodySize, Cloth
# Create your tests here.
class UserTestCase(TestCase):
    def setUp(self):
        body_size = BodySize.objects.filter(
            lower_bust = 28,
            upper_bust = 28,
            lower_waist = 28,
            upper_waist = 28,
            lower_hips = 28,
            upper_hips = 28
        )
        if not len(body_size):
            print("no data")
            body_size = BodySize.objects.create(
                lower_bust = 28,
                upper_bust = 28,
                lower_waist = 28,
                upper_waist = 28,
                lower_hips = 28,
                upper_hips = 28
            )
        else:
            print("data exist")
            body_size = body_size[0]
        User.objects.create(
            email="a",
            password="a",
            name="a",
            body_size=body_size
        )

    def test_present_recommendation(self):
        a = User.objects.get(name="a")
        top_result, bottom_result, dress_result = a.get_present_recommendations()
        print("top result:")
        print(top_result)
        print("bottom result:")
        print(bottom_result)
        print("dress result")
        print(dress_result)

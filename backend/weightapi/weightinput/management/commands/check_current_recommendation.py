from django.core.management.base import BaseCommand
import os
import sys
from ...models import User, BodySize, Cloth
class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_check(self, options['mode'])
        self.stdout.write('done.')

def check_current_recommendation():
    body_size = BodySize.objects.filter(
        lower_bust = 32,
        upper_bust = 32,
        lower_waist = 24,
        upper_waist = 24,
        lower_hips = 36,
        upper_hips = 36
    )
    if not len(body_size):
        print("no data")
        body_size = BodySize.objects.create(
            lower_bust =32,
            upper_bust = 32,
            lower_waist = 24,
            upper_waist = 24,
            lower_hips = 36,
            upper_hips = 36
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

    a = User.objects.get(name="a")
    top_result, bottom_result, dress_result = a.get_present_recommendations()
    print("top result:")
    print(top_result)
    print("bottom result:")
    print(bottom_result)
    print("dress result")
    print(dress_result)

def clear_data():
    if len(User.objects.filter(email="a")):
            User.objects.filter(email="a").delete()

def run_check(self, mode):
    clear_data()
    check_current_recommendation()
    clear_data()

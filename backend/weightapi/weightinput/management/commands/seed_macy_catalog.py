from django.core.management.base import BaseCommand
from ...models import BodySize, Cloth, Designer, SizeCategory
import json
'''

50 - coats: 1100 results
http://api.macys.com/v3/catalog/product/index?category=269

150 - dresses - 4600 results
http://api.macys.com/v3/catalog/product/index?category=5449

50 - jackets and blazers - 1800 results
http://api.macys.com/v3/catalog/product/index?category=120

50 - jeans - 1500 results
http://api.macys.com/v3/catalog/product/index?category=3111

50 - shorts - 550 results
http://api.macys.com/v3/catalog/product/index?category=5344

150 - tops - 6000 results
http://api.macys.com/v3/catalog/product/index?category=255

'''

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')

def store_macy_catalog():
    coats_data = json.load(open('./weightinput/management/commands/Catalog/coats'))
    dresses_data = json.load(open('./weightinput/management/commands/Catalog/dresses'))
    jackets_and_blazes_data = json.load(open('./weightinput/management/commands/Catalog/jackets and blazers'))
    jeans_data = json.load(open('./weightinput/management/commands/Catalog/jeans'))
    shorts_data = json.load(open('./weightinput/management/commands/Catalog/shorts'))
    tops_data = json.load(open('./weightinput/management/commands/Catalog/tops'))
    designer = Designer.objects.filter(name='Macy')[0]
    for data in [coats_data, dresses_data, jackets_and_blazes_data, jeans_data, shorts_data, tops_data]:
        for datum in data:
            petite_flag = False
            size = datum["productDetails"]["SizeMap"]
            smallest_size = size[0]["sizenormal"]
            largest_size = size[-1]["sizenormal"]
                
            if "P/" in smallest_size:
                petite_flag = True
                smallest_size = smallest_size[2:]
                largest_size = largest_size[2:]
            
            smallest_size = SizeCategory.objects.filter(size=smallest_size)
            largest_size = SizeCategory.objects.filter(size=largest_size)
            if not len(smallest_size):
                continue
            if not len(largest_size):
                continue

            if "typeName" in datum["productDetails"]["summary"]:
                if datum["productDetails"]["summary"]["typeName"] == "TOP":
                    smallest_size.filter(category_name__contains="top")
                    largest_size.filter(category_name__contains="top")
                elif datum["productDetails"]["summary"]["typeName"] == "SHORTS":
                    smallest_size.filter(category_name__contains="short")
                    largest_size.filter(category_name__contains="short")
                elif datum["productDetails"]["summary"]["typeName"] == "JEANS":
                    smallest_size.filter(category_name__contains="jean")
                    largest_size.filter(category_name__contains="jean")
                elif datum["productDetails"]["summary"]["typeName"] == "JACKET":
                    smallest_size.filter(category_name__contains="jacket")
                    largest_size.filter(category_name__contains="jacket")
                elif datum["productDetails"]["summary"]["typeName"] == "DRESS":
                    smallest_size.filter(category_name__contains="dress")
                    largest_size.filter(category_name__contains="dress")
            upper_waist = largest_size[0].upper_waist
            if (smallest_size[0].lower_waist > 0 and upper_waist < 1):
                upper_waist = smallest_size
            
            upper_hips = largest_size[0].upper_hips
            if smallest_size[0].lower_hips > 0 and upper_hips < 1:
                upper_hips = smallest_size[0].lower_hips

            body_size = BodySize.objects.filter(
                lower_bust = smallest_size[0].lower_bust,
                upper_bust = largest_size[0].upper_bust,
                lower_waist = smallest_size[0].lower_waist,
                upper_waist = upper_waist,
                lower_hips = smallest_size[0].lower_hips,
                upper_hips = upper_hips
            )
            price_value = 0
            cloth = None
            if "original" in datum["productDetails"]["price"]:
                price_value = datum["productDetails"]["price"]["original"]["pricevalue"]["low"]
            else:
                price_value = datum["productDetails"]["price"]["retail"]["pricevalue"]["low"]
            image_url = ""
            if "primaryPortraitSource" in datum["productDetails"]["summary"]:
                image_url = datum["productDetails"]["summary"]["primaryPortraitSource"]
            if not len(body_size):
                body_size = BodySize(
                    lower_bust = smallest_size[0].lower_bust,
                    upper_bust = largest_size[0].upper_bust,
                    lower_waist = smallest_size[0].lower_waist,
                    upper_waist = upper_waist,
                    lower_hips = smallest_size[0].lower_hips,
                    upper_hips = upper_hips
                )
                body_size.save()
                cloth = Cloth(
                    designer=designer,
                    body_size=body_size,
                    store_item_id = datum["id"],
                    name = datum["productDetails"]["summary"]["name"],
                    price = price_value,
                    link_url = datum["productDetails"]["summary"]["productURL"],
                    image_url = image_url
                )
                cloth.save()
            else:
                cloth = Cloth(
                    designer=designer,
                    body_size=body_size[0],
                    store_item_id = datum["id"],
                    name = datum["productDetails"]["summary"]["name"],
                    price = price_value,
                    link_url = datum["productDetails"]["summary"]["productURL"],
                    image_url = image_url
                )
                cloth.save()
            print(cloth)

def clear_data():
    Cloth.objects.all().delete()

def run_seed(self, mode):
    clear_data()
    store_macy_catalog()

from django.core.management.base import BaseCommand
import request
from ...models import BodySize, Cloth, Designer, SizeCategory

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
        coats_data = json.loads('./weightinput/management/commands/Catalog/coats')[0]
        dresses_data = json.loads('./weightinput/management/commands/Catalog/dresses')[0]
        jackets_and_blazes_data = json.loads('./weightinput/management/commands/Catalog/jackets and blazers')[0]
        jeans_data = json.loads('./weightinput/management/commands/Catalog/jeans')[0]
        shorts_data = json.loads('./weightinput/management/commands/Catalog/shorts')[0]
        tops_data = json.loads('./weightinput/management/commands/Catalog/tops')[0]
        designer = Designer.objects.filter(name='Macy')[0]
        for data in [coats_data, dresses_data, jackets_and_blazes_data, jeans_data, shorts_data, tops_data]:
            for datum in data:
                petite_flag = False
                size = datum.productDetails.SizeMap
                smallest_size = size[0].sizenormal
                largest_size = size[-1].sizenormal
                
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

                body_size = BodySize.objects.filter(
                    lower_bust = smallest_size[0].lower_bust,
                    upper_bust = largest_size[0].upper_bust,
                    lower_waist = smallest_size[0].lower_waist,
                    upper_waist = largest_size[0].upper_waist,
                    lower_hips = smallest_size[0].lower_hips,
                    upper_hips = largest_size[0].upper_hips
                )

                if not len(body_size):
                    body_size = BodySize(
                        lower_bust = smallest_size[0].lower_bust,
                        upper_bust = largest_size[0].upper_bust,
                        lower_waist = smallest_size[0].lower_waist,
                        upper_waist = largest_size[0].upper_waist,
                        lower_hips = smallest_size[0].lower_hips,
                        upper_hips = largest_size[0].upper_hips
                    )
                    body_size.save()
                    Cloth.objects.create(
                        designer=designer,
                        body_size=body_size,
                        store_item_id = datum.id
                        name = datum.productDetails.summary.name
                        price = datum.productDetails.price.original.pricevalue.low
                        link_url = datum.productDetails.summary.productURL
                        image_url = datum.productDetails.summary.primaryPortraitSource
                    )
                else:
                    Cloth.objects.create(
                        designer=designer,
                        body_size=body_size[0],
                        store_item_id = datum.id
                        name = datum.productDetails.summary.name
                        price = datum.productDetails.price.original.pricevalue.low
                        link_url = datum.productDetails.summary.productURL
                        image_url = datum.productDetails.summary.primaryPortraitSource
                    )

    def clear_data():
        Cloth.objects.all().delete()

    def run_seed(self, mode):
        clear_data()
        store_macy_catalog()

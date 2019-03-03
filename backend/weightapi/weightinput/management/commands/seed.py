from django.core.management.base import BaseCommand
import os
import model
class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('--mode', type=str, help="Mode")

    def handle(self, *args, **options):
        self.stdout.write('seeding data...')
        run_seed(self, options['mode'])
        self.stdout.write('done.')


def clear_data():
    for db in [Designer, SizeCategory]:
        db.objects.all().delete()
    

def store_designer_sizes():

    
    for filename in os.listdir('./SizeCharter'):
        designer = Designer(
            name = filename
        )
        designer.save()
        category = ''
        update_category = True
        for line in open('./SizeCharter/' + filename,"r"):
            line = line.rstrip('\n')
            if update_category:
                category = line
            elif line.length == 0:
                update_category = True
            else:
                data = line.splt()
                size_category = SizeCategory(
                    designer=designer.id,
                    category_name = category,
                    size = data[0],
                    lower_bust = float(data[1]),
                    upper_bust = float(data[2]),
                    lower_waist = float(data[3]),
                    upper_waist = float(data[4]),
                    lower_hips = float(data[5]),
                    upper_hips = float(data[6])
                )
                size_category.save()
                print(size_category)






def run_seed(self, mode):
    """ Seed database based on mode

    :param mode: refresh / clear 
    :return:
    """
    # Clear data from tables
    clear_data()
    if mode == MODE_CLEAR:
        return

    store_designer_sizes()
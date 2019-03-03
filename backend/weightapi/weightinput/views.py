from .models import BodySize, SizeHistory, User
import json 
from django.http import HttpResponse, JsonResponse

User.objects().all().delete()
User.objects.create(
    email="a",
    password="a",
    name="a",
    body_size=body_size
)
#SizeHistory.objects.create(

#)

def api_recommendation(request):
    data = json.load(request.body)
    body_size = BodySize.objects.filter(
        lower_bust = 32,
        upper_bust = 32,
        lower_waist = 24,
        upper_waist = 24,
        lower_hips = 36,
        upper_hips = 36
    )
    if not len(body_size):
        body_size = BodySize.objects.create(
            lower_bust =32,
            upper_bust = 32,
            lower_waist = 24,
            upper_waist = 24,
            lower_hips = 36,
            upper_hips = 36
        )
    else:
        body_size = body_size[0]
    a = User.objects.get(name="a")
    top_result, bottom_result, dress_result = a.get_present_recommendations()

    items = []
    for result in [top_result, bottom_result, dress_result]:
    for item in result:
        i = {
            "Item": {
                "propTypes": {
                    "title": item.name,
                    "photo": item.image_url,
                    "size":item.body_size.__str___,
                    "price":item.price,
                    "link": item.link_url
                }
            }
        }
        items.push(i)
    return JsonResponse({
        items
    })

def api_history(request):
    return JsonResponse({[{ date: "12/1/19", bust: 30, waist: 28, hips: 32 },
 { date: "15/1/19", bust: 29, waist: 27, hips: 30 },
 { date: "31/1/19", bust: 31, waist: 29, hips: 32 },
 { date: "12/2/19", bust: 29, waist: 25, hips: 20 }]})

 def api_add_history(request):
     data = json.load(request.body)
     return HttpResponse(status_code = 200)
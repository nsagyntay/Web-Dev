from django.http import JsonResponse
from .models import Product, Category

pretty_json = {'indent': 2, 'ensure_ascii': False}

def product_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False, json_dumps_params=pretty_json)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = product.__dict__
        data.pop('_state')
        return JsonResponse(data, json_dumps_params=pretty_json)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False, json_dumps_params=pretty_json)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        data = category.__dict__
        data.pop('_state')
        return JsonResponse(data, json_dumps_params=pretty_json)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False, json_dumps_params=pretty_json)
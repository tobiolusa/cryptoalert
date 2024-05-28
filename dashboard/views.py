import requests
from django.shortcuts import render
from datetime import date, timedelta
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def chart(request):
    
    datetime_today = date.today()
    date_today = str(datetime_today)
    date_10daysago = str(datetime_today - timedelta(days=20))
    api = "https://api.coindesk.com/v1/bpi/historical/close.json"
    
    try: 
        response = requests.get(api, timeout=5)
        response.raise_for_status()
        prices = response.json()
        btc_prices_range = prices.get('bpi')
    except requests.exceptions.ConnectionError as errc:
        raise ConnectionError(errc)
    except requests.exceptions.Timeout as errt:
        raise TimeoutError(errt)
    except requests.exceptions.HTTPError as err:
        raise SystemExit(err)
    
    context = {
        'price': btc_prices_range
    }
    return render(request, 'chart.html', context)
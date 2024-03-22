import requests
from django.shortcuts import render
from datetime import date, timedelta

# Create your views here.
def chart(request):
    
    datetime_today = date.today()
    date_today = str(datetime_today)
    date_10daysago = str(datetime_today - timedelta(days=10))
    api = "https://api.coindesk.com/v1/bpi/historical/close.json?start=' + date_10daysago + '&end=' + date_today + '&index=[USD]"
    
    try: 
        response = requests.get(api, timeout=5)
        response.raise_for_status()
        prices = response.json()
        btc_prices_range = prices.get('bpi')
    except request.Expection.ConnectionError as errc:
        raise ConnectionError(errc)
    except request.expections.Timeout as errt:
        raise TimeoutError(errt)
    except request.exceptions.HTTPError as err:
        raise SystemExit(err)
    
    context = {
        'price': btc_prices_range
    }
    return render(request, 'base.html', context)

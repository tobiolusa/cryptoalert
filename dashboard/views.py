import requests
from django.shortcuts import render, redirect
from datetime import date, timedelta
from django.contrib.auth.decorators import login_required
from authapp import views
from django.contrib.auth import logout


# Create your views here.
@login_required
def wallet(request):
    api_url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,SOL&tsyms=USD'
    api_historial = 'https://min-api.cryptocompare.com/data/v2/histohour'
    params = {'fsym': 'BTC',
              'tsym': 'USD',
              'limit': 30}
    historial_response = requests.get(api_historial, params=params)
    data = historial_response.json()

    if 'Data' in data and 'Data' in data['Data']:
        daily_data = data['Data']['Data']
        result = []
        for day_data in daily_data:
            result.append({
                'time': day_data['time'],
                'open': day_data['open'],
                'close': day_data['close']

            })
            return result 
    else:
        raise ValueError("Unexpected response format or data not available")
        
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        api_response = response.json()
        btc_price = api_response.get('BTC', {}).get('USD')
        eth_price = api_response.get('ETH', {}).get('USD')
        bnb_price = api_response.get('BNB', {}).get('USD')
        sol_price = api_response.get('SOL', {}).get('USD')

    except requests.exceptions.RequestException as e:
        btc_price = 'price not available'
        eth_price = 'price not available'
        bnb_price = 'price not available'
        sol_price = 'price not available'
        
    context ={'btc_price': btc_price, 'eth_price': eth_price, 'bnb_price': bnb_price, 'sol_price': sol_price}
    return render(request, 'dashboard/wallet.html', context)

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
    return render(request, 'dashboard/chart.html', context)

def logout_user(request):
    logout(user)
    return redirect('loginuser')
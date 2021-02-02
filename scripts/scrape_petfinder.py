import requests
from time import sleep

payload={}
headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
    'Accept': 'application/json, text/plain, */*',
    'DNT': '1',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://www.petfinder.com/search/dogs-for-adoption/us/ca/',
    'Accept-Language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7',
    'sec-gpc': '1'
}

from json import dump

data = []
for i in range(1, 600):
    url = f'https://www.petfinder.com/search/?page={str(i)}&limit[]=100&status=adoptable&distance[]=100&type[]=dogs&sort[]=nearest&location_slug[]=us%2Fca&include_transportable=true'
    thing = requests.request("GET", url, headers=headers, data=payload)
    response = thing.json()
    try:
        data = data + response['result']['animals']
        print('Got data', len(response['result']['animals']), 'added', len(data), 'total')
    except:
        print('Failed to get data')
        pass
    sleep(3)

print(response.text)
with open('output.json', 'w') as output_file:
    dump(data, output_file)
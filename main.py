from corazon_de_melon import api_service


api_service_instance = api_service.ApiService(
    public_key='xxx',
    private_key='xxx'
)

# print(api_service_instance.getApiHeaders(method='GET', url='', body='', query_params=''))


# method = "GET"
# url = "https://api3.corazondemelon.es/v2/home/home-data"

method = 'GET'
url = 'https://api3.corazondemelon.es/v2/minigame/break-basket'


# Get the headers
headers = api_service_instance.getApiHeaders(method, url)

print("GET ACCESS")
print(headers)

method = 'POST'
url = 'https://api3.corazondemelon.es/v2/minigame/break-basket'
body = '{"score":10}'
query_params = None

headers = api_service_instance.getApiHeaders(method, url, body, query_params)

print("POST ACCESS")
print(headers)

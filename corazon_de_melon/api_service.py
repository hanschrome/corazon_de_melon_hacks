import time
import hashlib
import hmac
from http.client import HTTPSConnection
from urllib.parse import urlencode
from base64 import b64encode


class ApiService:

    def __init__(self, public_key: str, private_key: str):
        self.public_key = public_key
        self.private_key = private_key

    def getApiHeaders(self, method, url, body=None, query_params=None):
        timestamp = str(int(time.time() * 1000))
        # timestamp = '1685192447176'
        full_url = url
        if query_params is not None and query_params != '':
            full_url += '?' + query_params

        elements = [self.public_key, method, full_url]
        headers = {'Content-Type': 'application/json'}

        if body is not None:
            elements.append(body)

        elements.append(timestamp)
        signature_base = '+'.join(elements)
        signature = hmac.new(bytes(self.private_key, 'latin-1'), msg=bytes(signature_base, 'latin-1'),
                             digestmod=hashlib.sha1).hexdigest()

        headers['X-Beemoov-Application'] = self.public_key
        headers['X-Beemoov-Signature'] = signature
        headers['X-Beemoov-Timestamp'] = timestamp

        return headers



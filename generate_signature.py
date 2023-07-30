import time
import hmac
import hashlib
from urllib.parse import quote_plus
from typing import Optional

def generate_signature(public_key: str, private_key: str, method: str, url: str, body: Optional[str]) -> dict:
    # timestamp
    timestamp = str(int(time.time() * 1000))  # Convert to milliseconds

    # Create the string to sign
    string_to_sign = f"{public_key}+{method}+{quote_plus(url)}"
    if body:
        string_to_sign += f"+{body}"
    string_to_sign += f"+{timestamp}"

    # Create the signature
    signature = hmac.new(private_key.encode(), string_to_sign.encode(), hashlib.sha1).hexdigest()

    # Prepare the headers
    headers = {
        'X-Beemoov-Application': public_key,
        'X-Beemoov-Signature': signature,
        'X-Beemoov-Timestamp': timestamp,
    }

    return headers

# Usage
public_key = "YourPublicKey"
private_key = "YourPrivateKey"
method = "GET"
url = "https://api3.corazondemelon.es/v2/home/home-data"
body = None

headers = generate_signature(public_key, private_key, method, url, body)


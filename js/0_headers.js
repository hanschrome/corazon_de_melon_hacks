var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js';
document.head.appendChild(script);

// Cookies

var cookies = document.cookie.split('; ');
var cookieObject = {};
cookies.forEach(function(cookie) {
  var parts = cookie.split('=');
  cookieObject[parts[0]] = parts[1];
});

var session = JSON.parse(decodeURIComponent(cookieObject['client.session']));
var publicKey = session.publicKey;
var privateKey = session.privateKey;

// Firma

function generateSignature(publicKey, privateKey, method, url, body, timestamp) {
  let stringToSign = publicKey + "+" + method + "+" + encodeURIComponent(url);

  if (body) {
    stringToSign += "+" + body;
  }

  stringToSign += "+" + timestamp;

  const signature = CryptoJS.HmacSHA1(stringToSign, privateKey).toString();

  return signature;
}


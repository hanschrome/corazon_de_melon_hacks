// Primero ejecuta esto:

var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js';
document.head.appendChild(script);

// Después ya puedes ejecutar todo lo demás:

var cookies = document.cookie.split('; ');
var cookieObject = {};
cookies.forEach(function(cookie) {
  var parts = cookie.split('=');
  cookieObject[parts[0]] = parts[1];
});

var session = JSON.parse(decodeURIComponent(cookieObject['client.session']));
var publicKey = session.publicKey;
var privateKey = session.privateKey;

function generateSignature(publicKey, privateKey, method, url, body, timestamp) {
  let stringToSign = publicKey + "+" + method + "+" + url;

  if (body) {
    stringToSign += "+" + body;
  }

  stringToSign += "+" + timestamp;

  const signature = CryptoJS.HmacSHA1(stringToSign, privateKey).toString();

  return signature;
}


var url = "https://api3.corazondemelon.es/v2/minigame/break-basket";
var timestamp = new Date().getTime().toString();
var signature = generateSignature(publicKey, privateKey, "GET", url, null, timestamp);

$.ajax({
  url: url,
  method: "GET",
  headers: {
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signature,
    'X-Beemoov-Timestamp': timestamp,
  },
  success: function(data) {
    console.log(data);
  }
});

var url = "https://api3.corazondemelon.es/v2/minigame/break-basket";
var body = JSON.stringify({"score":10});
var timestamp = new Date().getTime().toString();
var signature = generateSignature(publicKey, privateKey, "POST", url, body, timestamp);

$.ajax({
  url: url,
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signature,
    'X-Beemoov-Timestamp': timestamp,
  },
  data: body,
  success: function(data) {
    console.log(data);
  }
});

var url = "https://api3.corazondemelon.es/v2/minigame/insect-rush";
var timestamp = new Date().getTime().toString();
var signature = generateSignature(publicKey, privateKey, "GET", url, null, timestamp);

$.ajax({
  url: url,
  method: "GET",
  headers: {
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signature,
    'X-Beemoov-Timestamp': timestamp,
  },
  success: function(data) {
    console.log(data);
  }
});

var url = "https://api3.corazondemelon.es/v2/minigame/insect-rush";
var body = JSON.stringify({"score":10});
var timestamp = new Date().getTime().toString();
var signature = generateSignature(publicKey, privateKey, "POST", url, body, timestamp);

$.ajax({
  url: url,
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signature,
    'X-Beemoov-Timestamp': timestamp,
  },
  data: body,
  success: function(data) {
    console.log(data);
  }
});

// 'flower' // En reformas todavía
var urlFlower = "https://api3.corazondemelon.es/v2/minigame/flower";
var timestampFlower = new Date().getTime().toString();
var signatureFlower = generateSignature(publicKey, privateKey, "POST", urlFlower, null, timestampFlower);

$.ajax({
  url: urlFlower,
  method: "POST",
  headers: {
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signatureFlower,
    'X-Beemoov-Timestamp': timestampFlower,
  },
  success: function(data) {
    console.log(data);

    // Segunda petición al juego de las flores (PUT)
    var flowerId = data.data.id;
    var urlFlower2nd = `https://api3.corazondemelon.es/v2/minigame/flower/${flowerId}`;
    var bodyFlower2nd = JSON.stringify({});
    var timestampFlower2nd = new Date().getTime().toString();
    var signatureFlower2nd = generateSignature(publicKey, privateKey, "PUT", urlFlower2nd, bodyFlower2nd, timestampFlower2nd);

    $.ajax({
      url: urlFlower2nd,
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'X-Beemoov-Application': publicKey,
        'X-Beemoov-Signature': signatureFlower2nd,
        'X-Beemoov-Timestamp': timestampFlower2nd,
      },
      data: bodyFlower2nd,
      success: function(data) {
        console.log(data);
      }
    });
  }
});

var urlCash = "https://api3.corazondemelon.es/v2/minigame/cash";
var timestampCash = new Date().getTime().toString();
var signatureCash = generateSignature(publicKey, privateKey, "POST", urlCash, null, timestampCash);

$.ajax({
  url: urlCash,
  method: "POST",
  headers: {
    'X-Beemoov-Application': publicKey,
    'X-Beemoov-Signature': signatureCash,
    'X-Beemoov-Timestamp': timestampCash,
  },
  success: function(data) {
    console.log(data);

    // Segunda petición al juego "rasca y gana" (PUT)
    var cashId = data.data.id;
    var urlCash2nd = `https://api3.corazondemelon.es/v2/minigame/cash/${cashId}`;
    var bodyCash2nd = JSON.stringify({});
    var timestampCash2nd = new Date().getTime().toString();
    var signatureCash2nd = generateSignature(publicKey, privateKey, "PUT", urlCash2nd, bodyCash2nd, timestampCash2nd);

    $.ajax({
      url: urlCash2nd,
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'X-Beemoov-Application': publicKey,
        'X-Beemoov-Signature': signatureCash2nd,
        'X-Beemoov-Timestamp': timestampCash2nd,
      },
      data: bodyCash2nd,
      success: function(data) {
        console.log(data);
      }
    });
  }
});


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


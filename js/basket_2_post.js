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

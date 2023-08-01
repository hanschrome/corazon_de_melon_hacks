document.body.innerHTML = `
    <style>
        body { background-color: #000; color: #0F0; font-family: 'Courier New', Courier, monospace; }
        #status { display: none; margin-top: 20px; }
        #status span { display: block; margin-bottom: 10px; }
        #status span:before { content: '✔'; color: #008000; margin-right: 5px; }
        .loader {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid #0F0;
          width: 120px;
          height: 120px;
          -webkit-animation: spin 2s linear infinite; /* Safari */
          animation: spin 2s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -60px 0 0 -60px;
        }
        /* Safari */
        @-webkit-keyframes spin {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
    </style>
    <h1>El Hacker Riojano patrocina estos minijuegos.</h1>
    <div class="loader" id="loader"></div>
    <div id="status"></div>
`;

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

  // const signature = CryptoJS.HmacSHA1(stringToSign, privateKey).toString();

  //return signature;
  return '';
}

function makeRequest(method, url, body, gameName) {
  var timestamp = new Date().getTime().toString();
  var signature = generateSignature(publicKey, privateKey, method, url, body, timestamp);

  // $.ajax({
  //   url: url,
  //   method: method,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Beemoov-Application': publicKey,
  //     'X-Beemoov-Signature': signature,
  //     'X-Beemoov-Timestamp': timestamp,
  //   },
  //   data: body,
  //   success: function(data) {
      document.querySelector('#status').innerHTML += `<div>Ha terminado el juego ${gameName}</div>`;
      document.querySelector('#status').style.display = 'block';
  //   }
  // });
}

var games = [
  { method: "GET", url: "https://api3.corazondemelon.es/v2/minigame/break-basket", body: null, name: "Break Basket" },
  { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/break-basket", body: JSON.stringify({"score":10}), name: "Break Basket" },
  { method: "GET", url: "https://api3.corazondemelon.es/v2/minigame/insect-rush", body: null, name: "Insect Rush" },
  { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/insect-rush", body: JSON.stringify({"score":10}), name: "Insect Rush" },
  { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/flower", body: null, name: "Flower" },
  { method: "PUT", url: "https://api3.corazondemelon.es/v2/minigame/flower/1", body: JSON.stringify({}), name: "Flower" },
  { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/cash", body: null, name: "Cash" },
  { method: "PUT", url: "https://api3.corazondemelon.es/v2/minigame/cash/1", body: JSON.stringify({}), name: "Cash" },
];

games.forEach(function(game) {
  makeRequest(game.method, game.url, game.body, game.name);
});

setTimeout(function() {
  window.location.href = "https://www.corazondemelon.es/s1/games";
}, 3000 + games.length * 1000);

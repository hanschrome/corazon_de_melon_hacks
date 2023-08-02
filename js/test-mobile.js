async function sha1(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const keyData = encoder.encode(key);
    const cryptoKey = await window.crypto.subtle.importKey(
        "raw", keyData, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]
    );

    const signature = await window.crypto.subtle.sign("HMAC", cryptoKey, data);

    const hashArray = Array.from(new Uint8Array(signature));                     
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

document.body.innerHTML = `
    <style>
        body { 
            background-color: #000; 
            color: #0F0; 
            font-family: 'Courier New', Courier, monospace; 
            font-size: 4vw; 
        }
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

        .button {
            display: inline-block;
            color: #0F0;
            text-decoration: none;
            background-color: #000;
            padding: 10px 20px;
            border: 2px solid #0F0;
            margin: 10px 2px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .button:hover {
            background-color: #0F0;
            color: #000;
        }
    </style>
    <h1>El Hacker Riojano patrocina estos minijuegos.</h1>
    <div class="loader" id="loader"></div>
    <div id="status"></div>
    <a href="https://www.youtube.com/@HansCastroJimenez" class="button" target="_blank">Visitar Canal de YouTube</a>
    <a href="https://www.corazondemelon.es/s1/games" class="button">Volver a Corazón de Melón</a>
`;

async function generateSignature(publicKey, privateKey, method, url, body, timestamp) {
  let stringToSign = publicKey + "+" + method + "+" + url;

  if (body) {
    stringToSign += "+" + body;
  }

  stringToSign += "+" + timestamp;

  const signature = await sha1(stringToSign, privateKey);
  console.log(signature);

  return signature;
}

async function makeRequest(publicKey, privateKey, method, url, body, gameName) {
  var timestamp = new Date().getTime().toString();
  var signature = await generateSignature(publicKey, privateKey, method, url, body, timestamp);

  $.ajax({
    url: url,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-Beemoov-Application': publicKey,
      'X-Beemoov-Signature': signature,
      'X-Beemoov-Timestamp': timestamp,
    },
    data: body,
    success: function(data) {
      document.querySelector('#status').innerHTML += `<div>Ha terminado el juego ${gameName}</div>`;
      document.querySelector('#status').style.display = 'block';
    }
  });
}

async function startMiniGames() {
    try {
        var cookies = document.cookie.split('; ');
        var cookieObject = {};
        cookies.forEach(function(cookie) {
          var parts = cookie.split('=');
          cookieObject[parts[0]] = parts[1];
        });
        
        var session = JSON.parse(decodeURIComponent(cookieObject['client.session']));
        var publicKey = session.publicKey;
        var privateKey = session.privateKey;
        
        var games = [
          { method: "GET", url: "https://api3.corazondemelon.es/v2/minigame/break-basket", body: null, name: "Break Basket 1/2" },
          { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/break-basket", body: JSON.stringify({"score":9}), name: "Break Basket 2/2" },
          { method: "GET", url: "https://api3.corazondemelon.es/v2/minigame/insect-rush", body: null, name: "Insect Rush 1/2" },
          { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/insect-rush", body: JSON.stringify({"score":10}), name: "Insect Rush 2/2" }
        ];
        
        games.forEach(function(game, i) {
          setTimeout(function() {
            makeRequest(publicKey, privateKey, game.method, game.url, game.body, game.name);
            if(i === games.length - 1) {
              document.getElementById('loader').style.display = 'none';
            }
          }, i * 1000);
        });
  } catch (error) {
    document.body.innerHTML = `<pre>¿Has iniciado sesión en Corazón de Melón? - ${error}</pre>`;
  }
}

startMiniGames();

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
            background-color: #FFC0CB; 
            color: #8B008B; 
            font-family: 'Courier New', Courier, monospace; 
            font-size: 4vw;
            font-style: italic;
        }
        #status { display: none; margin-top: 20px; }
        #status span { display: block; margin-bottom: 10px; }
        #status span:before { content: '✔'; color: #008000; margin-right: 5px; }

        .loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid #8B008B;
            width: 120px;
            height: 120px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -60px 0 0 -60px;
        }
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
            color: #8B008B;
            text-decoration: none;
            background-color: #FFC0CB;
            padding: 2vw;
            border: 2px solid #8B008B;
            margin: 1vw;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .button:hover {
            background-color: #8B008B;
            color: #FFC0CB;
        }

        h1 {
            text-align: center;
            font-size: 5vw;
            color: #8B008B;
        }
    </style>
    <h1>¡Bienvenidas al adorable lado oscuro de Corazón de Melón! 🍈💖🕹️</h1>
    <p>👾💖 El Hacker Riojano: Los minijuegos están siendo adorablemente hackeados para obtener la máxima puntuación 💖👾</p>
    <div class="loader" id="loader"></div>
    <hr/>
    <div id="status"></div>
    <hr/>
    <p>En caso de errores, sugerencias o mejoras, avísame en mi canal de YouTube 💌</p>
    <a href="https://www.youtube.com/@HansCastroJimenez" class="button" target="_blank">📹 El Hacker Riojano (YouTube) 🌐</a>
    <a href="https://www.corazondemelon.es/s1/games" class="button">Volver a Corazón de Melón 🍈💖</a>
    <div id="finished" style="display: none;">
        <h2>🎉 ¡Todos los minijuegos han terminado!</h2>
    </div>
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
      document.querySelector('#status').innerHTML += `<div>🎉 Ha terminado el juego ${gameName}</div>`;
      document.querySelector('#status').style.display = 'block';
    },
    error: function(jqXHR, textStatus, errorThrown) {
      if(jqXHR.status === 400) {
        document.querySelector('#status').innerHTML += `<div>😅 Ya jugaste hoy a ${gameName}</div>`;
      } else if(jqXHR.status === 401) {
        document.querySelector('#status').innerHTML += `<div>😓 Ha habido un error jugando a ${gameName}, repórtalo en mi canal de YouTube</div>`;
      }
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
          { method: "POST", url: "https://api3.corazondemelon.es/v2/minigame/break-basket", body: JSON.stringify({"score":10}), name: "Break Basket 2/2" }
        ];

        games.forEach(function(game, i) {
          setTimeout(function() {
            makeRequest(publicKey, privateKey, game.method, game.url, game.body, game.name);
            if(i === games.length - 1) {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('finished').style.display = 'block'; // Mostrar el mensaje de finalización
            }
          }, i * 1000);
        });
  } catch (error) {
    document.body.innerHTML = `<pre>¿Has iniciado sesión en Corazón de Melón? - ${error}</pre>`;
  }
}

startMiniGames();

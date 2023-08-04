# Corazón de Melón

Se recomienda usar los códigos de móvil.

## Códigos de móvil

Sólo se facilitan los códigos del Insect Rush y del Break Basket porque los otros dos son aleatorios, no hay margen en la puntuación.

<hr/>

### 🐛 Fiebre de Insectos/Insect Rush 🐛

1. Visita https://www.corazondemelon.es/s1/games con el navegador de tu móvil. (Testeado en Google Chrome)
2. Copia y pega el siguiente código en la barra de tu navegador móvil con el juego abierto en la sección de minijuegos. NO LE DES A ENTER.

```javascript
$.get("https://raw.githubusercontent.com/hanschrome/corazon_de_melon_hacks/main/2023/8_Agosto/corazon_de_melon/insect_rush.js", function(data) { eval(data); });
```

3. Ve al principio del código de la barra del navegador y añade `javascript:` al principio del código.
4. Ahora sí, dale enter. Espera a que se quite la pantalla de carga y dale al botón de volver al juego.

<hr/>

### 🏀 Break Basket 🏀

1. Visita https://www.corazondemelon.es/s1/games con el navegador de tu móvil. (Testeado en Google Chrome)
2. Copia y pega el siguiente código en la barra de tu navegador móvil con el juego abierto en la sección de minijuegos. NO LE DES A ENTER.

```javascript
$.get("https://raw.githubusercontent.com/hanschrome/corazon_de_melon_hacks/main/2023/8_Agosto/corazon_de_melon/break_basket.js", function(data) { eval(data); });
```

3. Ve al principio del código de la barra del navegador y añade `javascript:` al principio del código.
4. Ahora sí, dale enter. Espera a que se quite la pantalla de carga y dale al botón de volver al juego.

<hr/>

## Códigos Ordenador (Algo antiguos, pero deberían funcionar igualmente)

Véase el vídeo de YouTube para saber usarse.
<hr/>
<a href="https://www.youtube.com/watch?v=CDXAvtSs5Zw">Ver el vídeo</a>
<hr/>
<a href="https://github.com/hanschrome/corazon_de_melon_hacks/blob/main/js/0_all-games.js">Ir al código</a>
<hr/>

# curl options
```bash
curl 'https://api3.corazondemelon.es/v2/session/signin/email' \
  -X 'OPTIONS' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'access-control-request-headers: content-type,x-amoursucre-platform,x-amoursucre-season,x-beemoov-application,x-beemoov-signature,x-beemoov-timestamp' \
  -H 'access-control-request-method: POST' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  --compressed
```

# curl register
```bash
curl 'https://api3.corazondemelon.es/v2/session/signin/email' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685191245500' \
  --data-raw '{"pseudo":"xxx","email":"xxx","password":"xxx","gender":"f","astro":"taurus"}' \
  --compressed
```

# curl login
```bash
curl 'https://api3.corazondemelon.es/v2/session/login' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685191245913' \
  --data-raw '{"email":"xxx","password":"xxx"}' \
  --compressed
```

# curl progress
```bash
curl 'https://api3.corazondemelon.es/v2/episode-report/progress' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685191827853' \
  --compressed
```

# curl talk
```bash
curl 'https://api3.corazondemelon.es/v2/story/scene/talk' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685191889786' \
  --data-raw '{"dialogId":100000,"storylineId":null}' \
  --compressed
```

# curl start
```bash
curl 'https://api3.corazondemelon.es/v2/story/episode/start' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192029377' \
  --data-raw '{"storylineId":null}' \
  --compressed
```

# curl user
```bash
curl 'https://api3.corazondemelon.es/v2/player/user' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192029600' \
  --compressed
```

# curl move
```bash
curl 'https://api3.corazondemelon.es/v2/story/place/move' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192213856' \
  --data-raw '{"placeId":1010,"storylineId":null}' \
  --compressed
```

# curl unread
```bash
curl 'https://api3.corazondemelon.es/v2/message/unread' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192323971' \
  --compressed
```

# curl minigame list
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/access' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192364431' \
  --compressed
```

# curl home-data
```bash
curl 'https://api3.corazondemelon.es/v2/home/home-data' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192447176' \
  --compressed
```

# curl home-data
```bash
curl 'https://api3.corazondemelon.es/v2/home/home-data' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685192447176' \
  --compressed
```

# curl story line start
```bash
curl 'https://api3.corazondemelon.es/v2/story/storyline/start' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s3' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685199479775' \
  --data-raw '{"storylineId":null}' \
  --compressed
```

# curl apply (choose bf)
```bash
curl 'https://api3.corazondemelon.es/v2/story/modifier/apply' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s3' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685199831236' \
  --data-raw '{"modifierId":69,"choice":"Hyun","storylineId":null}' \
  --compressed
```

# curl start episode
```bash
curl 'https://api3.corazondemelon.es/v2/story/episode/start' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s3' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685199996280' \
  --data-raw '{"storylineId":null}' \
  --compressed
```

# curl list product shop
```bash
curl 'https://api3.corazondemelon.es/bma/v1/bank/products?country=64&includeTagless=1&composeTagsWithAnd=0&tags%5B%5D=blackfriday' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685200102476' \
  --compressed
```

# curl use-free-level
```bash
curl 'https://api3.corazondemelon.es/v2/marketing/bank/use-free-level' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s2' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685200116307' \
  --data-raw '{}' \
  --compressed
```

# curl displayed inventory
```bash
curl 'https://api3.corazondemelon.es/v2/inventory/quest-item/displayed' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685200468569' \
  --compressed
```

# curl move
```bash
curl 'https://api3.corazondemelon.es/v2/story/place/move' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685200653714' \
  --data-raw '{"placeId":1,"storylineId":null}' \
  --compressed
```

# curl end
```bash
curl 'https://api3.corazondemelon.es/v2/story/scene/end' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685200826886' \
  --data-raw '{"storylineId":null}' \
  --compressed
```

# curl cash (rasca y gana)
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/cash' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685201268546' \
  --data-raw '{}' \
  --compressed
```
output
```json
{"data":{"id":117610955,"date":"2023-05-27T17:27:48+02:00","paid":false,"dollars":2},"error":null,"meta":{"notifications":[],"events":[]}}
```

# curl cash (rasca y gana) 2nd
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/cash/117610955' \
  -X 'PUT' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685201418235' \
  --data-raw '{}' \
  --compressed
```

# curl flower game
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/flower' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685201527763' \
  --data-raw '{}' \
  --compressed
```

output
```json
{"data":{"id":230804054,"date":"2023-05-27T17:32:07+02:00","paid":false,"sequence":[1,2,2,1,2,1,1,1,2,1,1],"actionPoints":2},"error":null,"meta":{"notifications":[],"events":[]}}
```

# curl flower game 2nd
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/flower/230804054' \
  -X 'PUT' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685201708600' \
  --data-raw '{}' \
  --compressed
```

output
```json
{"data":{"truncatedGain":2,"realGain":2},"error":null,"meta":{"notifications":[{"message":"+2 PA","type":"ActionPointNotification","change":2,"newAmount":2652}],"events":[]}}
```

# curl store quest item
```bash
curl 'https://api3.corazondemelon.es/v2/store/quest-item' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685202607098' \
  --compressed
```

# curl statistiques
```bash
curl 'https://api3.corazondemelon.es/v2/episode-report/statistiques' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685202683691' \
  --compressed
```

# curl pick up
```bash
curl 'https://api3.corazondemelon.es/v2/story/place/pick-up' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685202787382' \
  --data-raw '{"questItemId":4,"storylineId":null}' \
  --compressedcurl 'https://api3.corazondemelon.es/v2/story/place/pick-up' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685202787382' \
  --data-raw '{"questItemId":4,"storylineId":null}' \
  --compressed
```

# curl rate
```bash
curl 'https://api3.corazondemelon.es/v2/story/episode-rating/rate' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685202848104' \
  --data-raw '{"storylineId":null,"storyRating":5,"outfitRating":5,"crushRating":5,"techRating":5,"pictureRating":5}' \
  --compressed
```

# curl insect access GET
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/insect-rush' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685203574773' \
  --compressed
```
headers
```
:authority: api3.corazondemelon.es
:method: GET
:path: /v2/minigame/insect-rush
:scheme: https
accept: application/json, text/plain, */*
accept-encoding: gzip, deflate, br
accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6
cache-control: no-cache
origin: https://www.corazondemelon.es
pragma: no-cache
referer: https://www.corazondemelon.es/
sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-site
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36
x-amoursucre-platform: web-4.0.0
x-amoursucre-season: s1
x-beemoov-application: xxx '\
x-beemoov-signature: xxx '\
x-beemoov-timestamp: 1685203574773
```

# curl insect access (2nd) POST
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/insect-rush' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685203777500' \
  --data-raw '{"score":7}' \
  --compressed
```
Note: check data-raw score max can be 10.

# curl hypothetical for break-basket

# curl insect access GET
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/break-basket' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685205379291' \
  --compressed
```

# curl break basket (2nd) POST
```bash
curl 'https://api3.corazondemelon.es/v2/minigame/break-basket' \
  -H 'authority: api3.corazondemelon.es' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: es-ES,es;q=0.9,en;q=0.8,fr;q=0.7,gl;q=0.6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://www.corazondemelon.es' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.corazondemelon.es/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36' \
  -H 'x-amoursucre-platform: web-4.0.0' \
  -H 'x-amoursucre-season: s1' \
  -H 'x-beemoov-application: xxx '\
  -H 'x-beemoov-signature: xxx '\
  -H 'x-beemoov-timestamp: 1685205482835' \
  --data-raw '{"score":10}' \
  --compressed
```

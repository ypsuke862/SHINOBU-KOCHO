# SHINOBU-KOCHO


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Shinobu Kocho MD</title>
<style>
  body {
    background: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align: center;
    padding: 20px;
  }
  .animated-text {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .color1 {
    color: #b663c5; /* morado */
  }
  .color2 {
    color: #e670ad; /* rosa */
  }
  .img-container {
    max-width: 450px;
    margin: 0 auto 15px;
  }
  .img-container img {
    width: 100%;
    border-radius: 15px;
  }
  .info-text {
    font-size: 18px;
    margin: 5px 0;
    color: #fff;
  }
  .link {
    color: #e670ad;
    text-decoration: none;
    font-weight: 600;
  }
.link:hover {
    color: #b663c5;
  }
</style>
</head>
<body>

<div id="animatedTexts">
  <div id="text" class="animated-text color1">🦋𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎 𝐎𝐅𝐂 𝐃𝐄 𝐒𝐇𝐈𝐍𝐎𝐁𝐔 💜🌸</div>
  <div id="text2" class="animated-text color2" style="font-size: 24px;">💜🦋 𝐄𝐒𝐓𝐄 𝐁𝐎𝐓 𝐄𝐒 𝐔𝐍𝐀 𝐏𝐑𝐔𝐄𝐁𝐀 🌸</div>
</div>

<div class="img-container">
  <img src="https://i.postimg.cc/bJ9qC47R/portada.jpg" alt="Shinobu Kocho MD" />
</div>

<div class="info-text">Autor: Nino chan</div>
<div class="info-text">Instagram: <a href="https://instagram.com/kob_dano_nino" target="_blank" class="link">@kob_dano_nino</a></div>
<div class="info-text">WhatsApp: <a href="https://wa.me/529992042946" target="_blank" class="link">WhatsApp</a></div>

<script>
  const colors = ['#b663c5', '#e670ad']; // morado y rosa
  let currentIndex = 0;

  function toggleColors() {
    const textEl = document.getElementById('text');
    const text2El = document.getElementById('text2');
    
    currentIndex = (currentIndex + 1) % colors.length;

    textEl.style.color = colors[currentIndex];
    text2El.style.color = colors[(currentIndex + 1) % colors.length];
  }

  setInterval(toggleColors, 2000);
</script>

</body>
</html>
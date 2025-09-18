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
  .img-container {
    max-width: 450px;
    margin: 0 auto 20px;
  }
  .img-container img {
    width: 100%;
    border-radius: 15px;
  }
  .animated-text {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 5px;
  }
  .color1 {
    color: #b663c5; /* morado */
  }
  .color2 {
    color: #e670ad; /* rosa */
  }
</style>
</head>
<body>

<div class="img-container">
  <img src="https://i.postimg.cc/bJ9qC47R/portada.jpg" alt="Shinobu Kocho MD" />
</div>

<div>
  <div id="text" class="animated-text color1">𝘚𝘩𝘪𝘯𝘰𝘣𝘶 𝘒𝘰𝘤𝘩𝘰 𝘉𝘖𝘛-𝘔𝐃</div>
  <div id="text2" class="animated-text color2" style="font-size: 24px;">𝘗𝘰𝘸𝘦𝘳 𝘉𝘺: 𝘋𝘢𝘯𝘰𝘯𝘪𝘯𝘰</div>
  <div id="text3" class="animated-text color1" style="font-size: 20px;">𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰</div>
</div>

<script>
  const texts = [
"𝘚𝘩𝘪𝘯𝘰𝘣𝘶 𝘒𝘰𝘤𝘩𝘰 𝘉𝘖𝘛-𝘔𝐃",
    "𝘗𝘰𝘸𝘦𝘳 𝘉𝘺: 𝘋𝘢𝘯𝘰𝘯𝘪𝘯𝘰",
    "𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰"
  ];

  const colors = ['#b663c5', '#e670ad'];
  let index = 0;

  function animateText() {
    const textEl = document.getElementById('text');
    const text2El = document.getElementById('text2');
    const text3El = document.getElementById('text3');

    textEl.textContent = texts[0];
    text2El.textContent = texts[1];
    text3El.textContent = texts[2];

    // Cambiar colores alternando entre rosa y morado cada 2 segundos
    setInterval(() => {
      index = (index + 1) % colors.length;
      textEl.style.color = colors[index];
      text2El.style.color = colors[(index + 1) % colors.length];
      text3El.style.color = colors[index];
    }, 2000);
  }

  animateText();
</script>

</body>
</html>

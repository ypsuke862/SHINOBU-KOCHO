# SHINOBU-KOCHO


<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>Animación Texto</title>
<style>
  body {
    background: url('TU_LINK_DE_IMAGEN_AQUI') no-repeat center center fixed;
    background-size: cover;
    color: #b663c5;
    font-family: 'Arial Black', Arial, sans-serif;
    font-size: 2em;
    text-align: center;
    padding-top: 50px;
    height: 100vh;
    overflow: hidden;
  }
  #text {
    color: #e670ad;
    text-shadow: 1px 1px 5px #6a2d82;
    margin-bottom: 20px;
    min-height: 2em;
  }
</style>
</head>
<body>
  <div id="text"></div>

  <script>
const texts = [
      "𝘚𝘩𝘪𝘯𝘰𝘣𝘶 𝘒𝘰𝘤𝘩𝘰 𝘉𝘖𝘛-𝘔𝐃",
      "𝘗𝘰𝘸𝘦𝘳 𝘉𝘺: 𝘋𝘢𝘯𝘰𝘯𝘪𝘯𝘰",
      "𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰"
    ];

    let index = 0;
    const textEl = document.getElementById('text');

    function showText() {
      textEl.textContent = texts[index];
      index = (index + 1) % texts.length;
    }

    showText();
    setInterval(showText, 3000);
  </script>
</body>
</html>
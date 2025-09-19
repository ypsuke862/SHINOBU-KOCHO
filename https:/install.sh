bash
#!/data/data/com.termux/files/usr/bin/bash

Pedir permisos de almacenamiento
termux-setup-storage

Actualizar paquetes
pkg update -y && pkg upgrade -y

Instalar dependencias necesarias
pkg install -y git nodejs ffmpeg imagemagick

Clonar el repositorio del bot
git clone https://github.com/kobDanonino/SHINOBU-KOCHO

Entrar al directorio del bot
cd SHINOBU-KOCHO

Instalar módulos necesarios
npm install

(Opcional) Actualizar dependencias si es necesario
npm update

Iniciar el bot
npm start
bash
#!/data/data/com.termux/files/usr/bin/bash

cd && termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick

git clone https://github.com/kobDanonino/SHINOBU-KOCHO

cd SHINOBU-KOCHO

npm install

npm update

npm start
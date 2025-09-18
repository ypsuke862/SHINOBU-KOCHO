const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

let metadataDB = {};
if (fs.existsSync('./metas.json')) {
  metadataDB = JSON.parse(fs.readFileSync('./metas.json'));
}

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveState);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    const texto = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (texto?.startsWith('addmeta')) {
      const nombre = texto.split('addmeta')[1].trim();
      metadataDB[sender] = nombre;
      fs.writeFileSync('./metas.json', JSON.stringify(metadataDB));
      await sock.sendMessage(from, { text: `😺 Autor guardado: ${nombre}` }, { quoted: msg });
    }
  });
}

handler.help = ['addmeta *<nombre>|<autor>*']
handler.tags = ['autor sticker']
handler.command = ['take', 'crear', 'addmeta'] 

export default handler
import fs from 'fs';

const path = './settings.js';

let handler = async (m, { sock }) => {
  const from = m.key.remoteJid;
  const sender = m.key.participant || m.key.remoteJid;
  const texto = m.message.conversation || m.message.extendedTextMessage?.text;

  if (!texto?.startsWith('#setapplicant')) return;

  const mentioned = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (!mentioned) {
    await sock.sendMessage(from, { text: '❌ Debes mencionar a un usuario.' }, { quoted: m });
    return;
  }

  const numero = mentioned.split('@')[0];
  const nuevaLinea = `  ['numero', 'mod', true],`;

  try 
    let data = fs.readFileSync(path, 'utf-8');

    const regex = /globalȯwner*=*
    (.*?)
/s;
    const match = data.match(regex);

    if (!match) 
      await sock.sendMessage(from,  text: '⚠️ No se encontró el array global.owner en settings.js' ,  quoted: m );
      return;
    

    let contenido = match[1].trim();

    // Evita duplicados
    if (contenido.includes(`'{numero}'`)) {
      await sock.sendMessage(from, { text: '⚠️ El usuario ya es mod temporal.' }, { quoted: m });
handler.help = ['setapplicant']
handler.tags = ['owner']
handler.command = /^(setapplicant)$/i

handler.rowner = true

export default handler
import fs from 'fs';
const pathSettings = './settings.js';
const modsFile = './mods_temporales.json';

if (!fs.existsSync(modsFile)) fs.writeFileSync(modsFile, '{}');
let modsTemporales = JSON.parse(fs.readFileSync(modsFile, 'utf-8'));

let handler = async (m, { sock }) => {
  const from = m.key.remoteJid;
  const sender = m.key.participant || m.key.remoteJid;
  const texto = m.message.conversation || m.message.extendedTextMessage?.text;

  if (!texto?.startsWith('#removemod')) return;

  const mentioned = m.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (!mentioned) {
    await sock.sendMessage(from, { text: '❌ Menciona al usuario que quieres quitar del mod.' }, { quoted: m });
    return;
  }

  const numero = mentioned.split('@')[0];

  try {
handler.help = ['removemod']
handler.tags = ['owner']
handler.command = /^(removemod)$/i

handler.rowner = true

export default handler
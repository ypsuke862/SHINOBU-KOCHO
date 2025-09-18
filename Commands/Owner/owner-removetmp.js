const fs = require('fs');
const path = './settings.js';
const modsFile = './mods_temporales.json';

if (!fs.existsSync(modsFile)) fs.writeFileSync(modsFile, '{}');
let modsTemporales = JSON.parse(fs.readFileSync(modsFile));

sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message) return;

  const from = msg.key.remoteJid;
  const sender = msg.key.participant || msg.key.remoteJid;
  const texto = msg.message.conversation || msg.message.extendedTextMessage?.text;

  if (texto?.startsWith('#setapplicant')) {
    const mentioned = msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mentioned) {
      await sock.sendMessage(from, { text: '❌ Menciona al usuario para darle mod temporal.' }, { quoted: msg });
      return;
    }

    const numero = mentioned.split('@')[0];
    const nuevaLinea = `  ['${numero}', 'mod', true],`;

    try {
      let data = fs.readFileSync(path, 'utf-8');
      const regex = /global\.owner\s*=\s*
    (.*?)
/s;
const match = data.match(regex);

      if (!match) 
        await sock.sendMessage(from,  text: '⚠️ No se encontró global.owner en settings.js' ,  quoted: msg );
        return;
      

      if (data.includes(`'{numero}'`)) {
        await sock.sendMessage(from, { text: '⚠️ Este usuario ya está en la lista de mods/owner.' }, { quoted: msg });
        return;
      }

      const contenido = match[1].trim();
      const nuevoContenido = `contenido{nuevaLinea}`;
      const nuevoArray = `global.owner = [\nnuevoContenido]`;
      const nuevoSettings = data.replace(regex, nuevoArray);
      fs.writeFileSync(path, nuevoSettings);

      // Guardar fecha de expiración (ahora + 31 días)
      const expiraEn = Date.now() + 31 * 24 * 60 * 60 * 1000;
      modsTemporales[numero] = expiraEn;
      fs.writeFileSync(modsFile, JSON.stringify(modsTemporales, null, 2));

      await sock.sendMessage(from, 
        text: `✅ @{numero} fue agregado como mod temporal por 31 días.`,
        mentions: [mentioned]
      }, { quoted: msg });

    } catch (err) {
      console.error(err);
      await sock.sendMessage(from, { text: '❌ Error al modificar settings.js' }, { quoted: msg });
    }
  }
});
```

---
handler.help = ['settmp']
handler.tags = ['owner']
handler.command = /^(settmp)$/i

handler.rowner = true

export default handler
import fs from 'fs'

const SETTINGS_FILE = './settings.json' //

function loadSettings() {
  if (!fs.existsSync(SETTINGS_FILE)) return {}
  return JSON.parse(fs.readFileSync(SETTINGS_FILE))
}

let handlerBotInfo = async (m, { conn }) => {
  const settings = loadSettings()

  // Variables con valores por defecto
  const nombreCompleto = settings.nameLong || 'Sin nombre completo'
  const nombreCorto = settings.nameShort || 'Sin nombre corto'
  const moneda = settings.moneda || 'Sin moneda'
  const tipoRaw = settings.tipo || 'sub'  // 'sub', 'main', 'premium'
  let tipo = ''
  if(tipoRaw.toLowerCase() === 'sub') tipo = 'sub'
  else if(tipoRaw.toLowerCase() === 'main' || tipoRaw.toLowerCase() === 'principal') tipo = 'Main/principal'
  else if(tipoRaw.toLowerCase() === 'premium' || tipoRaw.toLowerCase() === 'codeprem') tipo = 'premium'
  else tipo = tipoRaw
const owner = settings.botOwner || 'dueño_no_definido'

  const descripcion = `𖤐  𝗜𝗻𝗳𝗼 𝘁𝗼𝘁𝗮𝗹 𝗱𝗲𝗹 𝗯𝗼𝘁 *{nombreCompleto}*

♡ *𝗡𝗮𝗺𝗲 𝗰𝗼𝗿𝘁𝗼:* nombreCorto
♡ *𝗡𝗮𝗺𝗲 𝗹𝗮𝗿𝗴𝗼:*{nombreCompleto}
♕ *Moneda:* moneda

➣ *Conectado a:* һ᥆ᥙsһ᥆ᥙ.᥎1.
➣ *Tipo:*{tipo}
➣ *Dueño:* @${owner}

*≻──────── ⋆✩⋆ ────────≺*`

  if(settings.banner) {
    // Banner guardado en base64
    const buffer = Buffer.from(settings.banner, 'base64')
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: descripcion,
      mentions: [owner + '@s.whatsapp.net']
    }, { quoted: m })
  } else {
    m.reply(descripcion)
  }
}

handlerBotInfo.help = ['botinfo']
handlerBotInfo.tags = ['info']
handlerBotInfo.command = ['botinfo']

export { handlerBotInfo }
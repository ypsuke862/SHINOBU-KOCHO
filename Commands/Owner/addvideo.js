import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const VIDEOS_FILE = './gif_videos.json'
const MODS_TEMPORALES = './mods_temporales.json'

// Función para verificar mods permanentes o temporales
function isMod(jid) {
  const id = jid.split('@')[0]
  const mods = (global.mods || []).map(m => m.split('@')[0])
  const tempMods = fs.existsSync(MODS_TEMPORALES)
    ? JSON.parse(fs.readFileSync(MODS_TEMPORALES)).map(j => j.split('@')[0])
    : []
  return mods.includes(id) || tempMods.includes(id)
}

let handler = async (m, { conn, sender }) => {
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])
  if (!isOwner && !isMod(sender)) {
    return m.reply('El comando #addvideo no existe')
  }

  const quoted = m.quoted
  if (!quoted || !quoted.message || !quoted.message.videoMessage && !quoted.message.gifMessage) {
    return m.reply('❀ responde a un gif/video para agregar lo')
  }
// Esperamos que `text` incluya la categoría
  const text = m.text || ''
  const parts = text.split(' ')
  // Ejemplo: "#addvideo anime" => parts[1] == "anime"
  const categoria = parts[1]
  if (!categoria) {
    return m.reply('✿ Debes poner la categoría. Ejemplo: #addvideo anime')
  }

  // Leer o inicializar archivo
  let data = {}
  if (fs.existsSync(VIDEOS_FILE)) {
    data = JSON.parse(fs.readFileSync(VIDEOS_FILE, 'utf-8'))
  }

  if (!data[categoria]) data[categoria] = []

  // Obtener el buffer del gif/video
  const mediaBuffer = await conn.downloadMediaMessage(quoted)  
  const hash = crypto.randomBytes(4).toString('hex')  // genera hash único (8 caracteres hex)

  // Guardar en JSON: (puedes guardar buffer como base64, o guardar path si lo guardas en disco)
  data[categoria].push({
    hash: hash,
    tipo: quoted.message.videoMessage ? 'video' : 'gif',
    media: mediaBuffer.toString('base64'),
    // podrías guardar descripción aleatoria después
    descripcion: '',  // lo dejas para rellenar más adelante
    fecha: Date.now()
  })

  fs.writeFileSync(VIDEOS_FILE, JSON.stringify(data, null, 2))

  m.reply(`✐ Video subido a la categoría \`categoriac̀on el hash $̀{hash}\``)
}

handler.help = ['addvideo <categoria>']
handler.tags = ['owner', 'mods']
handler.command = /^addvideo/i
handler.rowner = false

export default handler
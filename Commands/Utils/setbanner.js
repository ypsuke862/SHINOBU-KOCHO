import fs from 'fs'

const SETTINGS_FILE = './settings.json'
const MODS_TEMPORALES = './mods_temporales.json'

// Función para verificar si es mod (normal o temporal)
function isMod(jid) {
  const id = jid.split('@')[0]
  const mods = (global.mods || []).map(j => j.split('@')[0])
  const tempMods = fs.existsSync(MODS_TEMPORALES)
    ? JSON.parse(fs.readFileSync(MODS_TEMPORALES)).map(j => j.split('@')[0])
    : []
  return mods.includes(id) || tempMods.includes(id)
}

let handler = async (m, { conn }) => {
  const sender = m.sender.split('@')[0]

  // Verifica permisos: owner o mod
  if (!global.owner.some(([num]) => sender === num.split('@')[0]) && !isMod(m.sender)) {
    return m.reply('🚫 Este comando solo puede ser usado por el dueño o un mod.')
  }

  // Verifica si responde a imagen
  const quoted = m.quoted
  if (!quoted || !quoted.message || !quoted.message.imageMessage) {
    return m.reply('📸 Responde a una imagen para establecerla como banner del bot.')
  }

  const buffer = await conn.downloadMediaMessage(quoted)
  const bannerBase64 = buffer.toString('base64')
const settings = fs.existsSync(SETTINGS_FILE)
    ? JSON.parse(fs.readFileSync(SETTINGS_FILE))
    : {}

  settings.banner = bannerBase64
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2))

  m.reply('✅ Banner actualizado correctamente.')
}

handler.help = ['setbanner']
handler.tags = ['owner', 'mods']
handler.command = /^setbanner$/i
handler.rowner = false

export default handler
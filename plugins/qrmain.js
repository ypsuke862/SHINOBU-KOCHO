import fs from 'fs'

const MODS_TEMPORALES = './mods_temporales.json'

function isMod(jid) {
  const id = jid.split('@')[0]
  const mods = (global.mods || []).map(j => j.split('@')[0])
  const tempMods = fs.existsSync(MODS_TEMPORALES)
    ? JSON.parse(fs.readFileSync(MODS_TEMPORALES)).map(j => j.split('@')[0])
    : []
  return mods.includes(id) || tempMods.includes(id)
}

let handler = async (m, { conn, sender }) => {
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])

  if (!isOwner && !isMod(sender)) {
    return m.reply('🚫 Este comando solo puede ser usado por el dueño o mods.')
  }

  // Aquí coloca la lógica del comando qrmain
  // Por ejemplo, enviar el QR principal o información relacionada
  // Asumiendo que guardas el QR en algún archivo o variable
  // Si no, reemplaza este ejemplo con tu implementación real

  try {
    // Ejemplo: enviar la imagen del QR guardada en ./storage/qrmain.png
    const qrBuffer = await fs.promises.readFile('./storage/qrmain.png')
    await conn.sendMessage(m.chat, { image: qrBuffer, caption: 'QR Principal del bot' }, { quoted: m })
  } catch (e) {
await m.reply('❌ Error al obtener el QR principal.')
  }
}

handler.help = ['qrmain']
handler.tags = ['owner']
handler.command = /^qrmain$/i
handler.rowner = false

export default handler
import fs from 'fs'

const modsFile = './mods_temporales.json'

let handler = async (m, { conn }) => {
  const from = m.chat
  const texto = m.text

  if (texto !== '#listmod') return

  try {
    const modsTemporales = fs.existsSync(modsFile)
      ? JSON.parse(fs.readFileSync(modsFile))
      : []

    const modsNormales = global.mods || []

    if (modsNormales.length === 0 && modsTemporales.length === 0) {
      await conn.sendMessage(from, { text: '🤖 No hay moderadores registrados.' }, { quoted: m })
      return
    }

    let mensaje = '📋 *Lista de Moderadores:*\n\n'

    if (modsNormales.length) {
      mensaje += '👮‍♂️ *Mods normales:*\n'
      modsNormales.forEach((mod, i) => {
        mensaje += `• i + 1 - wa.me/{mod.replace(/[^0-9]/g, '')}\n`
      })
      mensaje += '\n'
    }

    if (modsTemporales.length) {
      mensaje += '⏳ *Mods temporales:*\n'
      modsTemporales.forEach((mod, i) => {
mensaje += `• i + 1 - wa.me/{mod.replace(/[^0-9]/g, '')}\n`
      })
    }

    await conn.sendMessage(from, { text: mensaje }, { quoted: m })

  } catch (err) {
    console.error(err)
    await conn.sendMessage(from, { text: '⚠️ Error al obtener la lista de moderadores.' }, { quoted: m })
  }
}

handler.help = ['listmod']
handler.tags = ['owner']
handler.command = /^listmod$/i
handler.rowner = true

export default handler
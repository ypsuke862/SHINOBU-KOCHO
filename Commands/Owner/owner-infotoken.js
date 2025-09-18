import fs from 'fs'

const PREM_TOKENS_FILE = './prem_tokens.json'
const MODS_TEMPORALES_FILE = './mods_temporales.json'

// Verifica si es mod permanente o temporal
function isMod(jid) {
  const id = jid.split('@')[0]
  const mods = (global.mods || []).map(j => j.split('@')[0])
  const tempMods = fs.existsSync(MODS_TEMPORALES_FILE)
    ? JSON.parse(fs.readFileSync(MODS_TEMPORALES_FILE)).map(j => j.split('@')[0])
    : []
  return mods.includes(id) || tempMods.includes(id)
}

let handler = async (m, { conn, sender }) => {
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])
  const mod = isMod(sender)

  if (!isOwner && !mod) {
    return m.reply('🚫 Solo dueño o mods pueden usar este comando.')
  }

  if (!fs.existsSync(PREM_TOKENS_FILE)) {
    return m.reply('❌ No hay tokens registrados.')
  }

  const tokens = JSON.parse(fs.readFileSync(PREM_TOKENS_FILE))

  if (tokens.length === 0) {
    return m.reply('❌ No hay tokens registrados.')
  }
const tokenInfo = tokens[0] // Asumimos un token, ajusta si hay más

  const createdAt = new Date(tokenInfo.createdAt)
  const now = new Date()
  const diffMs = now - createdAt
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  const estado = tokenInfo.active ? 'Activo' : 'Vencido'

  let texto = `┆⠟🦋⠻ＩＮＦＯＴＯＫＥＮ⠟🦋⠻\n┆\n`
  texto += `┆ᴛɪᴍᴇ: diffDays día(s) desde activación`
  texto += `┆ᴇsᴛᴀᴅᴏ:{estado}\n`
  texto += `┆\n⠟🦋⠻✜»«✜»✜«✜»✜«✜✜⠟🦋⠻`

  await m.reply(texto)
}

handler.help = ['infotoken']
handler.tags = ['owner']
handler.command = /^infotoken$/i
handler.rowner = false

export default handler
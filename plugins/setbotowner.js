import fs from 'fs'

const SETTINGS_FILE = './settings.json'
const MODS_TEMPORALES = './mods_temporales.json'

// Verificar si es mod o temporal
function isMod(jid) {
  const id = jid.split('@')[0]
  const mods = (global.mods || []).map(j => j.split('@')[0])
  const tempMods = fs.existsSync(MODS_TEMPORALES)
    ? JSON.parse(fs.readFileSync(MODS_TEMPORALES)).map(j => j.split('@')[0])
    : []
  return mods.includes(id) || tempMods.includes(id)
}

let handler = async (m, { text, sender }) => {
  const id = sender.split('@')[0]

  if (!global.owner.some(([num]) => id === num.split('@')[0]) && !isMod(sender)) {
    return m.reply('🚫 Este comando solo puede ser usado por el dueño o un mod.')
  }

  if (!text) {
    return m.reply('❗ Uso correcto: #setbotowner <número sin +>')
  }

  const numero = text.replace(/\D/g, '') // Solo números

  const settings = fs.existsSync(SETTINGS_FILE)
    ? JSON.parse(fs.readFileSync(SETTINGS_FILE))
    : {}

  settings.botOwner = numero

  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2))
m.reply(`✅ Dueño del bot actualizado a: *@numero*`)


handler.help = ['setbotowner <número>']
handler.tags = ['owner', 'mods']
handler.command = /^setbotowner/i
handler.rowner = false

export default handler
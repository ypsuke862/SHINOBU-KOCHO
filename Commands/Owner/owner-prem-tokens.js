import fs from 'fs'

const PREM_TOKENS_FILE = './prem_tokens.json'

let handler = async (m, { conn, text, sender }) => {
  const id = sender.split('@')[0]
  const isOwner = global.owner.some(([num]) => id === num.split('@')[0])
  const isMod = (global.mods || []).some(j => j.split('@')[0] === id)
  if (!isOwner && !isMod) {
    return m.reply('🚫 Solo dueño o mods pueden usar este comando.')
  }

  if (!text) return m.reply('❗️ Por favor ingresa un token válido.\nEjemplo: #addtoken abcdef123')

  let tokens = []
  if (fs.existsSync(PREM_TOKENS_FILE)) {
    tokens = JSON.parse(fs.readFileSync(PREM_TOKENS_FILE))
  }

  // Agregar nuevo token con fecha actual y estado activo
  tokens.push({
    token: text.trim(),
    createdAt: Date.now(),
    active: true
  })

  fs.writeFileSync(PREM_TOKENS_FILE, JSON.stringify(tokens, null, 2))

  await m.reply(`✅ Token agregado correctamente.\nToken: text.trim(): Activo`)


handler.help = ['addtoken <token>']
handler.tags = ['owner']
handler.command = /^addtoken/i
handler.rowner = false

export default handler
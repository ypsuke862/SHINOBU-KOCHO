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

  let txt = ''
  let count = 0
  for (const id in conn.chats) {
    if (id.endsWith('@g.us')) {
      const metadata = await conn.groupMetadata(id).catch(() => null)
      if (!metadata) continue
      count++
      txt += `*count.*{metadata.subject}\n🆔 id👥{metadata.participants.length} miembros\n\n`
    }
  }

  if (count === 0) txt = '🤖 No estoy en ningún grupo.'

  await m.reply(`📄 *Grupos del bot:*\n\n${txt}`)
}

handler.help = ['grouplist']
handler.tags = ['info']
handler.command = /^grouplist/i
handler.rowner = false

export default handler
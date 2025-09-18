let handler = async (m, { conn, isAdmin, isBotAdmin, participants, mentionedJid }) => {
  const user = mentionedJid[0] || m.quoted?.sender
  const isOwner = global.owner?.some(([id]) => m.sender.includes(id))
  const isMod = global.mods?.includes(m.sender) || global.tempMods?.includes(m.sender)

  if (!(isAdmin || isOwner || isMod)) {
    return m.reply('> ❀ Éste comando solo puede ser usado por administradores del grupo')
  }

  if (!isBotAdmin) {
    return m.reply('> ✦ El bot necesita ser admin para usar este comando')
  }

  if (!user) {
    return m.reply('> 🧩 Menciona o responde al usuario que deseas promover')
  }

  const target = participants.find(p => p.id === user)
  if (!target) return m.reply('> ⚠️ Usuario no encontrado en el grupo')

  if (target.admin) {
    return m.reply('> ⚠️ El usuario ya es administrador del grupo')
  }

  await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
  m.reply(`@user.split('@')[0] fue promovido a administrador del grupo`, null, 
    mentions: [user]
  )


handler.help = ['promote']
handler.tags = ['group']
handler.command = /^promote/i
handler.group = true

export default handler

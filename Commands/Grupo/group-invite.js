let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `_Ingrese el número al que quiere enviar una invitación al grupo._\n\n*• Ejemplo:*\n*${usedPrefix + command}* 51943058441`, m, rcanal)
if (text.includes('+')) return conn.reply(`_Ingrese el número todo junto sin el *+*_`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `_*Ingrese sólo números más su código de país sin espacios*_`, m, rcanal)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `_INVITACIÓN A GRUPO*\n\n_Un usuario te invitó a unirte a este grupo_ \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`_Se envió un enlace de invitación al usuario._`) 

}
handler.help = ['invite *<521>*']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
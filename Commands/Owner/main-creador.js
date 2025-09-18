let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Dano;;\nFN:Dano\nORG:Dano\nTITLE:\nitem1.TEL;waid=529992042946:529992042946\nitem1.X-ABLabel:Dano\nX-WA-BIZ-DESCRIPTION_© Development Dano AI whatsapp-dev CEO administrator_:\nX-WA-BIZ-NAME:Dano\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Dano', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'founder', 'Dano', 'black', 'Nino'] 

export default handler
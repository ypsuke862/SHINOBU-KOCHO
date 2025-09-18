let handler = async (m, { text }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `_Ingresa el nombre del comamdo._`, m, rcanal)
try {
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, `_No puedes borrar este comando._`, m, rcanal)
delete sticker[hash]
await conn.reply(m.chat, `_Comando eliminado con éxito._`, m, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['cmd'].map(v => 'del' + v + ' *<texto>*')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.owner = true

export default handler
import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `[❎] *El grupo no admite contenido Nsfw.*\n\n_Para activarlo  el *Administrador* debe usar el siguiente comando.\n\n*• Ejemplo:*\n\n_.nsfw on_\n\n> © Powered by MDLG-Team`, m, rcanal)
if (!text) return m.reply('_Ingresa el nombre de la imágen que estas buscando._')
await m.react('🕓')
try {
let { dl_url } = await Starlights.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*• Resultado* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['rule34 *<búsqueda>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
//handler.limit = 20
handler.group = true 
export default handler
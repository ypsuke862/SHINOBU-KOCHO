import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `[❎] *El grupo no admite contenido Nsfw.*\n\n_Para activarlo el *Administrador* debe usar el siguiente comando._\n\n*• Ejemplo:*\n\n_.nsfw on_\n\n> © Powered by Danonino`, m, rcanal)

await m.react('🕓')
try {
let res = await (await googleImage('Imagen ' + 'hentai')).getRandom()
await conn.sendFile(m.chat, json.url, 'thumbnail.jpg', `*• Hentai, disfrutalo 🥵*`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = ['hentai']
handler.group = true 
handler.register = true
//handler.limit = 10
export default handler
import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('_Ingresa el nombre de la imágen que estas buscando._\n\n`• Ejemplo:`\n' + `> *${usedPrefix + command}* Shinobu kocho`)
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','nañielpussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'memo', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cogiendo', 'cepesito', 'hot', 'buceta', 'xxx', 'rule', 'r u l e']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('[⚠️ ERROR] _No puedo aceptar tu petición, por favor busca otra imagen_').then(_ => m.react('✖️'))
await m.react('🕓')
try {
let { dl_url } = await Starlights.GoogleImage(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*• Resultado:* ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['imagen *<búsqueda>*']
handler.tags = ['img']
handler.command = ['image', 'gimage', 'imagen']
handler.register = true 
//handler.limit = 1
export default handler
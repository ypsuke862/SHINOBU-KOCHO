
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) return m.reply(`_Ingresa el enlace del Grupo._`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('_Enlace invalido._')
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`_ Me uní correctamente al Grupo *${res}${expired ? `* Durante *${expired}* días._` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
    let pp = 'https://telegra.ph/file/4fa3f65b6698517cd8dcf.mp4'
   await conn.sendMessage(res, { video: { url: pp }, gifPlayback: true, caption: '*[⚠️] AVISO*\n_Shinobu kochou se unió con exito a este grupo._\n\n_Para poder ver sus funciones y ejecutarlos usa el siguiente comando._\n\n*•Ejemplo:*\n\n_/menu_\n\n> © Powered by Danonino', mentions: [m.sender] }, { quoted: estilo })
}
handler.help = ['join *<link> <días>*']
handler.tags = ['owner']

handler.command = ['join', 'entrar'] 
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
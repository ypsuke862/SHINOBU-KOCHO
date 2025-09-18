let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
_El amor de ${text} por ti es de_ _${Math.floor(Math.random() * 500)}%_ _de un 100%_
_Deberias pedirle que sea tu  novia/o ?_
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love *@user*']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
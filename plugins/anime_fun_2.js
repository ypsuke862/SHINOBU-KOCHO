let handler = async (m, { conn, text, usedPrefix, command }) => {
  const from = m.chat
  const user = m.sender
  const mention = m.mentionedJid && m.mentionedJid[0]
  const userName = conn.getName(user)
  const mentionName = mention ? conn.getName(mention) : null

  function getRandomVideo(cat) {
    let videos = global.db.data.videos?.[cat] || []
    if (videos.length === 0) return null
    return videos[Math.floor(Math.random() * videos.length)]
  }

  let caption = ''
  let video = getRandomVideo(command)

  if (!mention) {
    if (command === 'angry') caption = `*userName* está muy enojado! ヽ( `д´*)ノ`
    if (command === 'eat') caption = `*{userName}* está comiendo algo delicioso~ (｡･ω･｡)`
    if (command === 'love') caption = `*userName* siente mariposas en el estómago… (ღ˘⌣˘ღ)`
   else 
    if (command === 'angry') caption = `*{userName}* se enojó con *mentionName*! (ง'̀-'́)ง`
    if (command === 'eat') caption = `*{userName}* invita a *mentionName* a comer algo rico  🍙`
    if (command === 'love') caption = `*{userName}* está enamorado/a de *${mentionName}* (♥ω♥*)`
  }

  if (video) {
await conn.sendMessage(from,  video:  url: video.url , caption ,  quoted: m )
   else 
    await conn.reply(from, caption, m)
  

handler.help = ['angry', 'eat', 'love']
handler.tags = ['anime']
handler.command = /^(angry|eat|love)/i

export default handler
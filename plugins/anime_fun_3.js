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
    caption = command === 'slap'
      ? `*userName* se dio una cachetada... (ノ_<。)`
      : `*{userName}* se golpeó solo por error... (×_×;）`
  } else {
    caption = command === 'slap'
      ? `*userName* le dio una cachetada a *{mentionName}*! (；′⌒\`)`
      : `*userName* le dio un golpe directo a *{mentionName}*! (ง'̀-'́)ง`
  }

  if (video) {
    await conn.sendMessage(from, { video: { url: video.url }, caption }, { quoted: m })
  } else {
    await conn.reply(from, caption, m)
  }
}

handler.help = ['slap', 'punch']
handler.tags = ['anime']
handler.command = /^(slap|punch)$/i
export default handler
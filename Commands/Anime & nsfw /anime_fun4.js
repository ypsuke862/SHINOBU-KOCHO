let handler = async (m, { conn, text, usedPrefix, command }) => {
  const from = m.chat
  const user = m.sender
  const mention = m.mentionedJid && m.mentionedJid[0]
  const userName = conn.getName(user)
  const mentionName = mention ? conn.getName(mention) : null

  if (!mention) {
    if (command === 'kiss') {
      return conn.reply(from, `*userName* se dio un beso a sí mismo/a. (◕‿◕)`, m)
    
    if (command === 'kisscheek') 
      return conn.reply(from, `*{userName}* se sonrojó y se dio un beso en la mejilla. (⁄ ⁄•⁄ω⁄•⁄ ⁄)`, m)
    }
  } else {
    if (command === 'kiss') {
      return conn.reply(from, `*userName* le dio un beso en la boca a *{mentionName}*. (❤ ω ❤)`, m)
    }
    if (command === 'kisscheek') {
      return conn.reply(from, `*userName* le dio un beso en la mejilla a *{mentionName}*. (づ￣ ³￣)づ`, m)
    }
  }
}

handler.help = ['kiss', 'kisscheek']
handler.tags = ['anime']
handler.command = /^(kiss|kisscheek)$/i

export default handler
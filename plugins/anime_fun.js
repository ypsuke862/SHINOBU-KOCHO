let handler = async (m, { conn, text, usedPrefix }) => {
  const userName = m.pushName || conn.getName(m.sender)
  const mentioned = m.mentionedJid && m.mentionedJid[0]
  const mentionedName = mentioned ? (await conn.getName(mentioned)) : null

  const comando = m.text.toLowerCase().split(' ')[0].replace(usedPrefix, '')

  // Comandos y sus descripciones exactas
  const respuestas = {
    cum: {
      conMencion: `*userName se desmayó de emoción tanto darle a{mentionedName}!* (≧▽≦)`,
      sinMencion: `\`userName se desmayó de emoción tanto darle a... Omitiremos eso`̀,
    anal: 
      conMencion: `*{userName} le hizo una travesura a mentionedName !* (｡•̀ᴗ-)✧`,
      sinMencion: `$̀{userName} está haciendo una travesura a... Omitiremos eso\``
    },
    bj: {
      conMencion: [
        `*userName le chupa con emoción a{mentionedName} !* (っ˘ڡ˘ς)`,
        `*userName le da unas chupadas a{mentionedName} !* ෆ╹ .̮ ╹ෆ`,
        `*userName se la chupa a{mentionedName} !* ⊙﹏⊙`
      ],
      sinMencion: `\`userName está chupando con desesperación (─.─||)`̀,
    fuck: 
      conMencion: [
`*{userName} y mentionedName hacen cosas en privado...* (ღゝ◡╹ )ノ`,
        `*{userName} se lo hace con amor a mentionedName !* ˃͈◡˂͈`,
        `*{userName} se la metió con pena a mentionedName !* ˃ 𖥦 ˂`
      ],
      sinMencion: `$̀{userName} le mete su vrg de 19 cm a... Omitiremos eso\``
    }
  }

  if (!(comando in respuestas)) return // No es ninguno de estos comandos

  if (mentionedName) {
    let resp = respuestas[comando].conMencion
    // Si es arreglo, elegir uno aleatorio
    if (Array.isArray(resp)) {
      resp = resp[Math.floor(Math.random() * resp.length)]
    }
    await m.reply(resp)
  } else {
    await m.reply(respuestas[comando].sinMencion)
  }
}

handler.help = ['cum', 'anal', 'bj', 'fuck']
handler.tags = ['fun']
handler.command = /^(cum|anal|bj|fuck)$/i

export default handler
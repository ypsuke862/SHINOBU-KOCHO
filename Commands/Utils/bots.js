import fs from 'fs'

let handler = async (m, { conn }) => {
  const from = m.chat

  try {
    const code = fs.readFileSync('./code.js', 'utf-8')

    const ownerRegex = /['"](\d+)['"]\s*,\s*['"]owner['"]\s*,\s*true/g
    const botRegex = /['"](\d+)['"]\s*,\s*['"]bot['"]\s*,\s*true/g
    const premRegex = /['"](\d+)['"]\s*,\s*['"]prem['"]\s*,\s*true/g

    const owners = [...code.matchAll(ownerRegex)].map(m => m[1])
    const bots = [...code.matchAll(botRegex)].map(m => m[1])
    const prems = [...code.matchAll(premRegex)].map(m => m[1])

    const totalBots = owners.length + bots.length + prems.length
    const totalOwners = owners.length
    const totalSubs = bots.length
    const totalPrems = prems.length

    let textoGrupo = ''
    let botsEnGrupo = []

    if (from.endsWith('@g.us')) {
      const metadata = await conn.groupMetadata(from)
      const participantes = metadata.participants.map(p => p.id)

      const todos = [...owners, ...bots, ...prems]
handler.help = ['bots']
handler.tags = ['sockets']
handler.command = ['bots', 'botsactivos']
handler.rowner = false
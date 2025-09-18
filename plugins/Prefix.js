const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `_No se encontró ningún prefijo, por favor escriba un prefijo._\n\n_Ejemplo:_ ${usedPrefix + command} !`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
 // await m.reply(`_prefijo actualizado con éxito, prefijo actual: ${text}_`);
  conn.fakeReply(m.chat, `_Prefijo actualizado con éxito,prefijo actual: ${text}_`, '0@s.whatsapp.net', '_Prefix new...🚀_')
};
handler.help = ['prefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = ['prefix'];
handler.rowner = true;
export default handler;

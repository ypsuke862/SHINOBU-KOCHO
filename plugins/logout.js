export default async function logoutCommand(conn, msg, userRoles, userId, botId, ownersData) {
  // ownersData: objeto con info de dueños y bots que controlan { userId: botId }
  // userId: id del usuario que ejecuta el comando
  // botId: id del bot actual (el que está ejecutando este código)

  if (!userRoles.owner && !userRoles.mod && !userRoles.duenio) {
    return await conn.reply(msg.chat, '❌ Solo owners, mods y dueños pueden usar este comando.', msg.id);
  }

  // Validar que el dueño solo cierre sesión en su bot asignado
  if (userRoles.duenio) {
    if (ownersData[userId] !== botId) {
      return await conn.reply(msg.chat, '❌ No puedes cerrar sesión de este bot, solo del que controlas.', msg.id);
    }
  }

  await conn.reply(msg.chat, '🔌 Cerrando sesión...', msg.id);

  try {
    await conn.logout();
    process.exit(0);
  } catch (error) {
    await conn.reply(msg.chat, '❌ Error al cerrar sesión.', msg.id);
  }
}
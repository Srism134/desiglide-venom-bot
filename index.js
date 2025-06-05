const venom = require('venom-bot');

venom
  .create({
    session: 'desiglide-session', // Session name for auto login
    headless: 'new',              // Fix for Chrome new headless mode
    useChrome: true,              // Use system Chrome instead of bundled Chromium
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error('❌ Failed to start bot:', error);
  });

function start(client) {
  console.log('✅ Bot connected!');

  // Example: Send a message to a group every 2 hours
  const groupId = 'KYgcDnvZFmOHWRlbOcKK5h@g.us'; // Replace with your actual group ID

  setInterval(() => {
    client
      .sendText(groupId, '👋 Hello group! This message is sent every 2 hours.')
      .then(() => console.log('✅ Message sent'))
      .catch((err) => console.error('❌ Failed to send message:', err));
  }, 2 * 60 * 60 * 1000); // every 2 hours
}

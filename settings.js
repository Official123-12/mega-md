require('dotenv').config();

const settings = {
  // Bot prefix(es) - can be a comma-separated string in env
  prefixes: process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'],
  
  // Sticker pack info
  packname: process.env.PACKNAME || 'IAMLEGEND',
  author: process.env.AUTHOR || 'STANY TZ',
  
  // Timezone (default to East Africa Time)
  timeZone: process.env.TIMEZONE || 'Africa/Nairobi',
  
  // Bot identity
  botName: process.env.BOT_NAME || "IAM•LEGEND",
  botOwner: process.env.BOT_OWNER || 'STANY TZ',
  ownerNumber: process.env.OWNER_NUMBER || '255787069580',
  
  // External API keys (optional)
  giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  
  // Bot mode: public/private
  commandMode: process.env.COMMAND_MODE || "public",
  
  // Performance & storage settings
  maxStoreMessages: Number(process.env.MAX_STORE_MESSAGES) || 20,
  tempCleanupInterval: Number(process.env.CLEANUP_INTERVAL) || 1 * 60 * 60 * 1000,
  storeWriteInterval: Number(process.env.STORE_WRITE_INTERVAL) || 10000,
  
  // Bot description and links
  description: process.env.DESCRIPTION || "IAMLEGEND WhatsApp Bot by STANY TZ – Advanced multi-device bot with powerful features.",
  version: "1.1.0",
  updateZipUrl: process.env.UPDATE_URL || "https://github.com/Stanytz378/IAMLEGEND/archive/refs/heads/main.zip",
  channelLink: process.env.CHANNEL_LINK || "https://whatsapp.com/channel/0029Vb7fzu4EwEjmsD4Tzs1p",
  ytch: process.env.YT_CHANNEL || "STANY TZ"
};

module.exports = settings;
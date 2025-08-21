const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Silva~xFJ1HCTD#p5mup16gUBZOxSTpSCe9hc3_74OTv2fTJIhQzYhMkU8",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "✦ Kindal ✦ MD ✦",
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, "true"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, "false"),
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2349046344762",
    OWNER_NAME: process.env.OWNER_NAME || "✦ Kindal ✦ MD ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Kindal ✦ MD ✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG: process.env.LIVE_MSG || "> KINDAL MD IS ACTIVE ⚡",
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, "false"),
    AUTO_REACT_NEWSLETTER: convertToBool(process.env.AUTO_REACT_NEWSLETTER, "true"), // Newsletter auto-react
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, "false"),
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, "true"),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, "true"),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*👀 Seen by kindal MD ✅*",
    MODE: process.env.MODE || "both", // both, public, or private
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, "true"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "false"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, "false"),
    
    // Anti-Delete Settings
    ANTIDELETE_GROUP: convertToBool(process.env.ANTIDELETE_GROUP, "true"),
    ANTIDELETE_PRIVATE: convertToBool(process.env.ANTIDELETE_PRIVATE, "true"),
    
    // Debug Settings
    DEBUG: convertToBool(process.env.DEBUG, "true")
};



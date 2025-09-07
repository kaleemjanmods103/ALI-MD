
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "ALI-MD~H4sIAAAAAAAAA61Vy47bNhT9F25tZPSWZWCA6GGNZPkhy+8puuBItEVbL1OUbDmYRZFF19OujW6Ltougjx/KMit/QiHPTBMgbToFKoAARVH3nnN5z+EbkKQ4Rw6qQPsNyAguIUX1lFYZAm2gFasVIqAJAkghaAPfzcTMxv1lP7Z73vA4G8XDo6CVWj6xli1D7o92bJlN5GkyvQb3TZAVdxH2vxBwdrAcc7jphszExyO2r5RB113tWlkmb7NYm2znMHdIg5ZeHbCOCDHBybqThShGBEYOqlyIycvgN3rcuMF44Xy+mM93N3OZOq35DgrWcH07TKtDsUKeVvKNLN6/DD6hHu7LB7urM+vSYIrR+va2fxgvKnkoCTHaVGvDWejSpLdPH+HneJ2gwA5QQjGtXlz3Tsc+RHt/PzUbZmANsv7qapYIjjvuTWdlivaNkbX2XHE0nzMvA+4VHEPZIY4M+ZaKrDOhpMvsQrwf6qyVVbgxCIx4NqLuofUpcJc898r2v9Q9N3w+mFFpEB3NjUhHd91jXxw3HF8qSGRuej0xNiYxdOhN/2XwnZl7nGQTJHB3xvjOyyyS3Y7yhjRhr7Q8NrJCcfZELu8WofARPqQF+RJK+0ZTvKnJVvCGa2F3tdMcm3cXW31BrcpeMNOY8Uf2cDgbOPbsMO3LG61UMGk08AEmKlo40VF39CXElmoUo8qzRdlQ19cXRltU2QFos/dNQNAa55RAitPkssYyTQCDcox8guilvKC/xUd9t152j0ko5jrkw4bnHiY2HU0YSxaZnSJaEbfrwt72GjRBRlIf5TkKLJzTlFR9lOdwjXLQ/upyUjVpguKUoi4OQBu0WgzLszzPSqzIvM5f7UNIc5hlrxJEQROsSBr3EWhTUqAmuPxhKryicCrf0nSN41mG0eSOyRiKIHKsKjFMzTF+zDrBMcopjDPQZmVR5gReZOT75v8EhOHMjmzokiTzHU5iZZ41VF1XFJPtKALP8/8CpPW/AVFYyWjpKmtynMqzkmFwMsdxGqNLLVOWO+aXgbDC/ddNkKADfZRU3Qg82wQrTHI6TYosSmHwrLfnj9D30yKh4yrx9XqCCGh/sowoxck6r6kVCSR+iEuk1zxAewWjHP3Ve4ig4JnLk5/qaVBLQlguDWFgWqDGXgf6vDht7vPyRJdtHMMyisgxjKQwnCy2udf1ehMksI4F3p/efvjpdD49/Ho+Pfx4Pj38dj49/PI0fj9///b7929P5x++/eP8w7fvzqfvvjmfHt6dTw8/P413H346vT+9rev6xLgGGCAKcZSDNtB7G8J2p2Zn6I4Uf3pzo9prVV+r4GOFnk3gUWTa4hCWcNHjY2V4cIIpUY4iM5f75drrcMQ3PX8uhXoV9sb7678JUruoMzXyMW/vNKuVLnJ+3kiWi22oussomt2Wg5gxvHSeSI35kPYYoTKn4+Ngo4aT0rYFV/QE8dboQdWz09ls727FxVAfGOp1nS1AJfbRp8mCRdDzVjg6hoOMR9ExKyNzPNgfOcHYdnm66zueoHbupLm1KLxk3unaATvUW5tuUKCN7bLJuJvqWrdY7w5XgyuUdHh+qu4f7elij9HTtYSfjANfXlcYXVz+6RT/tRcegdcty9w3P4nxdG/8g/dqo1lrecdFlSKWk3yczJwrvxGYxbEndLzBjtemC7NIR3k6ZnJwX2sniyBdpSQGbQCTgKSXViNpUWvATlbpF5Lpmm0bo0fmEcyp+lFXf+cZwuMul6SZBfMQtAHrCKEl1CKp1CwbU0ifZQrU+jFnt+D+T1MrLaxcCQAA", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...

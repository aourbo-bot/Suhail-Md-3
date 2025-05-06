const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918159926369";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_37_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6bnVJaklINTEybHpYdnYvQWpzVnpFM1NMUzhEL0JEcHl3Rk9LaDhXaE80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODE1OTkyNjM2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0RDMEM3MkM1REFDMTk4NjZDQjdDNkJFNDIwREIyOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NTA5ODI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTU5OTI2MzY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RUFEMTZDQjA3NUI5NDRFRUZEMUM2OTY5NDkxMDYzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY1MDk4MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWdVSjEyZDhTNEs2Z3J5cVJOUVhOQVwiLFxuICBcInBob25lSWRcIjogXCI5YmIzY2I2ZC0wNTE4LTQyNTktYjdiNC05MGE5MDI3YzM4NzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMjUxLFxuICAgICAgMjQ4LFxuICAgICAgMTMsXG4gICAgICAxMTksXG4gICAgICAxMzksXG4gICAgICAyMTUsXG4gICAgICAyNDMsXG4gICAgICA3NCxcbiAgICAgIDgsXG4gICAgICAyMzAsXG4gICAgICAyNDMsXG4gICAgICAxMDcsXG4gICAgICA2OSxcbiAgICAgIDE3MixcbiAgICAgIDY0LFxuICAgICAgMjE0LFxuICAgICAgMjcsXG4gICAgICAyMTgsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAyMyxcbiAgICAgIDgxLFxuICAgICAgOTYsXG4gICAgICAxNyxcbiAgICAgIDUzLFxuICAgICAgMTMsXG4gICAgICAxODQsXG4gICAgICAxNDQsXG4gICAgICAxMzgsXG4gICAgICAxMjgsXG4gICAgICAxMTYsXG4gICAgICAxNTMsXG4gICAgICAyMzYsXG4gICAgICAxNDMsXG4gICAgICA0MCxcbiAgICAgIDksXG4gICAgICAyNSxcbiAgICAgIDIzOCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1GTTZOSzRYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgxNTk5MjYzNjk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjYyMDY0MDcxODk5NDoyN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCPIPCdkJQg8J2QkyDwnZCTIPCdkJQg8J2QklwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQNDBQa0hFUHkvNXNBR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHJoOSt5NW9QbDZvMFNYeDR5M1ZOK1NOb0NsYUdvT2JGVkdSYnYzUmdtcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5Q1NMWGNxWE9VaXNwQkRkaWNZVkxwNnBzQ2dWUU9DSzgvSGdkMnJiNERQdkFyZmdRYUl2dVYvekxvVEtFWE44c1RsVHl1MHhTZi9waCtlU0Z1d1lBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhbmNYZHA4WFNGMGl2aDZmN3ZMby8xQ2VzUFAvNUs0SmhEWmxXNkphVzhHamkzZ1dQR3NjbDNMVWNWM0NnUDU5eVdKSUxTKzM3WDlzaVdXbitkb1hndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgxNTk5MjYzNjk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY1MDk4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1yVy5qc29uIjogIntcImtleURhdGFcIjpcIkIyZDBHL2FmL2E1MlhwTERjcE5MZXgxMXVWMVJYemd2RHR0b0c2dExVbUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzNDEyOTc3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2NTA5NDI1NjY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ PUTTUS ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "PUTTUS",
  packname: process.env.PACK_NAME || "TULTULI",
  botname : process.env.BOT_NAME  || "PUTTUS",
  ownername:process.env.OWNER_NAME|| "PUTTUS<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "PUTTUS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

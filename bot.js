const { Telegraf } = require("telegraf")
require("dotenv").config({ path: __dirname + "/.env" })
const bot = new Telegraf(process.env.BOT_TOKEN)

const helpMessage = `
 Say somthing me 
 /start - to start to bot 🏁
 /help  - to get some helps 🆘
`

bot.start(ctx => {
  ctx.reply("Hi I am echo bot 🌚")
  ctx.reply(helpMessage)
})

bot.help(ctx => {
  ctx.reply("I am send you your message to you again 🌚")
})

bot.command("echo", ctx => {
  let input = ctx.message.text
  let inputArr = input.split(" ")

  let message = ""
  if (inputArr.length === 1) message = "You said: echo"
  else {
    inputArr = inputArr.slice(1, inputArr.length)
    console.log("hello", inputArr)
    message = `You said: ${inputArr.join(" ")}`
  }

  ctx.reply(message)
})

bot.launch()

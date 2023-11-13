# Telegram Chatbot 

A simple Telegram chatbot built with Node.js and the Telegram Bot API 

## Introduction

This Telegram chatbot is designed to [mention the purpose of your chatbot]. It uses the Telegram Bot API to interact with users on the Telegram platform.

## Features

- Commands: Interact with the bot using various commands.
- Images Upload: Allow users to upload images to the bot.
- Documents Read Upload: Accept document uploads for further processing.

# Local Configuration

- Clone the repository and cd:

   ```js
   git clone https://github.com/avinashtare/Telegram-Chat-Bot.git

   cd Telegram-Chat-Bot
   ```
   
## Create Chat Token

- Open Telegram Channel [@BotFather]: -
- Write Command: 

   ```js
   /newbot
   ```
- Copy Token And Rename .env.example to .env and set: 

   ```bash
   PORT=5012
   Telegram_Bot_Token=<YOUR TOKEN>
   ```


## Create Virtual Free Host From Ngrok

-   Install Ngrok For Window:
```bash
choco install ngrok
// you can also install direct as exe
```

- Configuration Your Ngrok:
```bash
ngrok config add-authtoken <AUTH_ID>
```

- Start a tunnel (Add You Telegram Chat Bot Running App PORT):
```bash
ngrok http 5012
```

**- Configuration Your Chat Bot To You Host:**
```bash
https://api.telegram.org/bot<Token>/setWebhook?url=<Ngrok_Url>
```

## Installation

- Install Npm Pacakges:
   ```js
   npm i
   ```
- Start npm (before start do local configuration)
   ```js
   npm start
   ```


## Telegram Documentation

[Documentation](https://core.telegram.org/)


## License


[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project is released under the [MIT License](LICENSE).  


## Contact

**[avinashtare.work@gmail.com](mailto:avinashtare.work@gmail.com)**

## Author
**卐🕉 Avinash Tare 🕉 卐**
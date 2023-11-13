const axios = require("axios")
const path = require("path");
const fs = require("fs");

const Token = process.env.Telegram_Bot_Token;

// this url for send message 
const BASE_URL = `https://api.telegram.org/bot${Token}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params
            })
        },
        post(method, data) {
            return axios.get(`/${method}`, {
                method: "post",
                baseURL: BASE_URL,
                params,
                data
            })
        }
    }
}

// save image send by user 
async function handleSaveImage(file_id, fileName, messageObj = {}) {
    // find image saved path 
    const getFileSaveUrl = await axios.get(`https://api.telegram.org/bot${Token}/getFile?file_id=${file_id}`);

    if (!getFileSaveUrl.data.ok) return;

    // saved path result 
    const { file_path } = getFileSaveUrl.data.result;
    // download image from saved path 
    const fileURL = `https://api.telegram.org/file/bot${Token}/${file_path}`;

    const imageResponse = await axios.get(fileURL, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data);

    const saveFilePath = path.join(process.cwd(), `/images/${fileName}.jpg`);

    // save image 
    try {
        await fs.promises.writeFile(saveFilePath, imageBuffer);

        return getAxiosInstance().get("sendMessage", {
            chat_id: messageObj.chat.id,
            text: `Your image uplaod at \n /images/${fileName}.jpg`
        })
    } catch (error) {
        console.error('Error writing file:', error.message);
        return;
    }
}

module.exports = { AxiosInstance: getAxiosInstance(), handleSaveImage }
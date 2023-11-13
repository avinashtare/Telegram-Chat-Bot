const { AxiosInstance, handleSaveImage } = require("./axios");

// send message to current user
function sendMessage(messageObj, messageText) {
    return AxiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText
    })
}

// handle text message
function handleMessage(messageObj) {
    const messageText = messageObj.text || "";
    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);

        // send message by command 
        switch (command) {
            case "start":
                return sendMessage(messageObj, "Hey hi! i am you bot!")

            case "random":
                return sendMessage(messageObj, Math.random())

            default:
                return sendMessage(messageObj, "Sorry! i don't now what you are going to say!")
        }

    }
    else {
        return sendMessage(messageObj, messageText)
    }
}

// handle phtos 
async function handleImage(messageObj) {
    const imgArray = messageObj.photo;
    const realImage = imgArray[imgArray.length - 1];
    const { file_id, file_unique_id, file_size, width, height } = realImage;

    const fileName = file_unique_id;

    handleSaveImage(file_id, fileName, messageObj)

}
module.exports = { handleMessage, handleImage };
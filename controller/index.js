const { handleMessage, handleImage } = require("./lib/Telegram");

async function handler(req, method) {
    const body = req.body;
    if (body) {
        const messageObj = body.message;
        
        // if messageObj not avaliable return ;
        if(!messageObj) return;

        // handel diffrent formats 
        if (messageObj.text) {
            await handleMessage(messageObj);
        }
        else if (messageObj.photo) {
            await handleImage(messageObj)
        }
        else if (messageObj.document) {
            console.log("It's a doucment")
        }
        else {
            console.log(body)
        }
    }
    return
}

module.exports = { handler }
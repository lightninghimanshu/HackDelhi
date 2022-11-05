const axios = require("axios")
const res = axios("https://gateway.pinata.cloud/ipfs/Qmbn4kfsyMSiawxh8vqK6UGWbANQjcVkVULUrecKcrvcYW").then((res)=>{
    res.text().then((text)=>{console.log(text)});
})

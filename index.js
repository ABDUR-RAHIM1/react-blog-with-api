const app = require("./app");  
const connectDB = require("./Database/Db"); 
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8000;

connectDB()
 
app.listen(PORT, () => {
    console.log( `Server Is Running On Port : http://localhost:${PORT}`)
})
 
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080

// making some restriction to cors feature
let corsOptions = {
    origin:"https://localhost:8001" // this is the url to which we are giving access to our api and database
}

// Middleware
app.use([cors(corsOptions),express.json(),express.urlencoded({extended:true})])

// Testing api
app.get('/',(req,res)=>{
    res.json({message:"Hello"})
})

app.listen(PORT,()=>{
   console.log(`Server listining at port ${PORT}`)
})
const express = require('express')
const app = express();
const connect = require('./config/db')
const Task = require('./controllers/task.controller')
const cors = require('cors')

app.use(express.json())
app.use(cors());


app.use('', Task);

app.listen(process.env.PORT || 3001,async ()=>{

    
        await connect();
        console.log("DB connected and running on port 3001");
})
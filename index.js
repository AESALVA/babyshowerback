const express = require('express')
const app = express()
app.use(express.json());
require('dotenv').config();
let cors = require('cors')
app.use(cors({origin:"*"}));



const PORT = process.env.PORT || 8000;

const usersRoutes = require('./Routes/users');
app.use('/users', usersRoutes) 
const commentsRoutes = require('./Routes/comments');
app.use('/comments', commentsRoutes)

app.listen(PORT, ()=>{console.log('server running on port '+ PORT )});



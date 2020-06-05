require('dotenv').config()
const express = require('express')
const app = express()

const massive = require('massive')
const session = require('express-session')
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ctr1 = require('./controller')


app.use(express.json())



app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))


app.post('/auth/register', ctr1.registerUser)





massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db =>{
    app.set('db',db)
    console.log('DB is connected and')
    app.listen(SERVER_PORT, () => console.log(`SERVER is Up and Running on ${SERVER_PORT}`))
}).catch(err => console.log(err))


const bcrypt = require('bcrypt')
module.exports ={
    registerUser: async(req, res) =>{
        const {username, password} = req.body
        const db = req.app.get('db')
        const result = await db.get_user(username)
        
        if(result[0]){
            return res.status(409).send('Username already taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const registeredUser = await db.register_user([username, hash])
        
        req.session.user = {username: registeredUser[0].username, id: registeredUser[0].id}
        res.status(201).send(req.session.user)
        
    }
}
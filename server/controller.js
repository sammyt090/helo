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
        
    },

    loginUser: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const result = await db.check_user(username)
        if(!result[0]){
            return res.status(404).send('User does not exist')
        } else {
            const authenticate = bcrypt.compareSync(password, result[0].password)
            if (authenticate) {
                req.session.user = {
                    id: result[0].id,
                    username: result[0].username,
                    profile_pic: result[0].profile_pic
                }
                res.status(200).send(req.session.user)

            }else{
                
                res.status(403).send('Email or Password incorrect')

            }
        }
    }


}
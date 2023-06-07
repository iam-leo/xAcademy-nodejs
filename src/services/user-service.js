import jwt from "jsonwebtoken";
import { User } from "../models/User.js"

const createUser = async () => {
    try {
        const users = await User.findAll();
        if(users.length === 0){
            let usuarioAdmin = new User()
            usuarioAdmin.name = "admin"
            usuarioAdmin.password = "admin"
            await usuarioAdmin.save()
        }
    } catch (error) {
        console.log('Ocurrió un error, no se creó el usuario Admin')
    }    
}

const userLogin = async (name, password) => {
    const user = await User.findOne({
        where: {
            name,
            password
        }
    })

    if(!user){
        throw new Error ('Nombre y/o password son incorrectos')
    }

    const token = jwt.sign({
        name: user.name,
        password: user.password
    }, 'ClaveUltraSecreta')

    return {
        accessToken: token
    }
}

export { createUser, userLogin }
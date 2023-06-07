import { User } from "../models/User.js"

export const createUser = async () => {
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
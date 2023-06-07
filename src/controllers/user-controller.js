import { userLogin } from "../services/user-service.js"

const login = async (req, res, next) => {
    const { name, password } = req.body

    try {
        const result = await userLogin(name, password);
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

export { login }
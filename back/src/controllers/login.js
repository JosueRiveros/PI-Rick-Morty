const { User } = require("../DB_connection")

const login = async(request, response)=> {
    try {
        const { email, password } = request.query
        if(!email || !password) return response.status(400).send("Faltan datos")

        const user = await User.findOne({
            where: { email }
        })

        if(!user) return response.status(404).send("Usuario no encontrado")

        return user.password === password ? response.status(200).json({ access: true }) 
        : response.status(403).send("Contraseña incorrecta")
    }
    catch (error) {
    return response.status(500).json({ error: error.message })
    }
}

module.exports = login
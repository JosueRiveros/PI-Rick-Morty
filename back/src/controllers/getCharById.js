const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
    
    try {
        const { id } = req.params   
        const { data } = await axios(`${URL}/${id}`)

            if (data.id) {
                const character = {
                    id,
                    name: data.name,
                    status: data.status,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    species : data.species
                }
    
                return res.status(200).json(character)

            }
            
            return res.status(404).send("Not found")

    } catch (error) {

        return res.status(500).send(error.message)

    }
}

module.exports = {
    getCharById
}
const { Favorite } = require("../DB_connection")

const deleteFav = async(request, response) => {
    try{
        const { id } = request.params
        const characterDelete = await Favorite.findByPk(id)
        characterDelete.destroy()

        const allFavorite = await Favorite.findAll()
        return response.status(200).json(allFavorite)
    }

    catch(error) {
        return response.status(500).json({ error: error.message })
    }
}

module.exports = deleteFav
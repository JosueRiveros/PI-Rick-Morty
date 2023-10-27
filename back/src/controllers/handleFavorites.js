let myFavorites = []

const postFav = (req, res) => {
    const character = req.body
    const characterRepeated = myFavorites.find((favorite) => {
        return favorite.id == character.id
    })

    if (!characterRepeated) myFavorites.push(character)
    
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params

    myFavorites = myFavorites.filter((favorite) => {
        return favorite.id != id
    })

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav, deleteFav
}

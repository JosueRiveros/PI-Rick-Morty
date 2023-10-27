import axios from "axios";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const Detail = () => {

    const {id} = useParams()
    let [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <>
            {character.name ? (
        <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="img"/>
        </>
    ) : (
        <h3>Loading...</h3>
     )}
        </>
    )
}

export default Detail;
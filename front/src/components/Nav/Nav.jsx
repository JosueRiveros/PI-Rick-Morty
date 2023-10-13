import SearchBar from "../Searchbar/Searchbar"
import { Link } from "react-router-dom"

export default function Nav ({onSearch, setAccess}){
    const handleLogOut = () => {
      setAccess(false)
    }

    return(
        <>
        <SearchBar onSearch={onSearch} />
        <button>
        <Link to="/about">ABOUT</Link>
        </button>
         
        <button>
          <Link to="/home">HOME</Link>
        </button>

        <button>
          <Link to="/favorites">FAVORITES</Link>
        </button>

        <button onClick={handleLogOut}>LOG OUT</button>
        </>
    )
}
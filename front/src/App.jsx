import './App.css';
import { useState} from 'react';
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';



function App() {
 
 const EMAIL = "riveritos@gmail.com"
 const PASSWORD = "river123"
 const [access, setAccess] = useState(false)
 const navigate = useNavigate()


 const login = (userDataEmail, userDataPass) => {
   if(userDataEmail.email===EMAIL && userDataPass.pass===PASSWORD){
      setAccess(true);
      navigate("/home");
   }
 }


 const location = useLocation()  
 let [characters, setCharacters] = useState([])

 useEffect(() => {
   !access && navigate("/")
   // eslint-disable-next-line
 },[access]);


 function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡No hay personajes con este ID!');
     }
  });
}

const onClose = (id) => {
  const charactersFiltered = characters.filter(character =>
  character.id !== Number(id))
  setCharacters(charactersFiltered)
  }

   return (
      <div className='App'>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} setAccess={setAccess} /> : null}
      <Routes>
         <Route path="/" element={<Form login={login}/>} />
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About/>} />
         <Route path="/detail/:id" element={<Detail/>} />
         <Route path="/favorites" element={<Favorites/>} />
         
      </Routes>
      </div>
   );
}

export default App;

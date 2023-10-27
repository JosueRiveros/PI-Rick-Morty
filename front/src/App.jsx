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
 
 const [access, setAccess] = useState(false)
 const navigate = useNavigate()


   const login = async (userDataEmail, userDataPass) => {

   try {
      const { email } = userDataEmail;
      const { pass } = userDataPass;
      const URL = 'http://localhost:3001/rickandmorty/login/'
      const { data } = await axios(URL + `?email=${email}&password=${pass}`)
      const { access } = data;
      setAccess(data)
      access && navigate('/home')
      
   } catch (error) {
      throw Error(error.message)
   }
   }

 const location = useLocation()  
 let [characters, setCharacters] = useState([])

 useEffect(() => {
   !access && navigate("/")
   // eslint-disable-next-line
 },[access])

 const onSearch = async (id) => {
  try {
  const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

  const charaRepeat = characters.find((chara) => chara.id == id)

  if (charaRepeat){
   alert("Ya tienes esa carta")
  } else if (data.name){
   setCharacters((oldChars) => [...oldChars, data])
  }
  } catch (error) {
   alert("Esa carta no existe")
  }
}

const onClose = (id) => {
   const charactersFiltered = characters.filter(character =>
   character.id !== id)
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

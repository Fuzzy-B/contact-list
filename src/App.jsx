import { useState } from 'react' 
import './App.css'
import './components/ContactList.jsx'
import ContactList from './components/ContactList.jsx'  
import SingleView from "./components/singleview.jsx"
 
function App() {
  const [contacts, setContacts] = useState(null)   
  const [selected, setSelected] = useState(null)
   
  return (
    <>
       {selected ? (<SingleView selected={selected} setSelected={setSelected}/>) : (<ContactList  setSelected={setSelected}/>)}
    </>
  )
}

export default App

import { useState } from 'react' 
import './App.css'
import './components/ContactList.jsx'
import ContactList from './components/ContactList.jsx'
import { dummyContacts } from './components/ContactList.jsx'

function App() {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log('contacts: ', contacts)
  return (
    <>
       <ContactList />
    </>
  )
}

export default App

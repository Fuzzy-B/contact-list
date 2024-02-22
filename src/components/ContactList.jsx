import {useState, useEffect} from "react";
import ContactRow from './ContactRow'

  

function ContactList({setSelected}) {
     const [contacts, setContact] = useState(null)
      
     useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
                const json = await response.json() 
                setContact(json) 
            } catch (err) {
                console.log('error: ', err)
            }
        }
        fetchContacts() 
     }, [])

     if(!contacts) {
        return <h1>Loading...</h1>
     }
     
     

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan='3'>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} setSelected={setSelected}/>
                })}
            </tbody>
        </table>
    )
}

export default ContactList
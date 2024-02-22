import React from "react"
import { useState } from 'react' 
import { useEffect } from "react" 

export default function SingleView ({selected, setSelected}) {
    const [contact, setContact] = useState(null)
    
    useEffect(()=> {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selected}`)
                const json = await response.json() 
                setContact(json) 
                
            } catch (err) {
                console.log('error: ', err)
            }
        }
        fetchContact()
    }, [])
     
    console.log('contact: ', contact)

    if(!contact) {
        return <h1>Loading...</h1>
     }

    return (
        <> 
        <h1>{contact.name}</h1>
        <h3>Username: {contact.username}</h3> 
        <span>-</span>
        <h2>Company: {contact.company.name}</h2>
        <p>{contact.company.catchPhrase}</p>
        <p>{contact.company.bs}</p>
        <span>-</span>
        <h3>Contact info:</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Website: {contact.website}</p>
        <span>-</span>
        <h3>Address:</h3>
        <p>{contact.address.street}, {contact.address.suite}</p>
        <p>{contact.address.city}, {contact.address.zipcode}</p>
        <p>-</p>

        <button onClick={()=> setSelected(null)}>Return to Contacts List</button>
        </>
    )
}


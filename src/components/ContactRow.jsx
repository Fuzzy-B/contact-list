import React from "react"

export default function ContactRow ({contact, setSelected}) {
    
    return (
        <tr className='contactRow'  onClick={()=> {setSelected(contact.id)}}>
            <td className="leftTD">{contact.name}</td>
            <td>{contact.email}</td>
            <td className="rightTD">{contact.phone}</td>
        </tr>
    )
}
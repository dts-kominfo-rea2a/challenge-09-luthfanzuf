// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
import data from '../data/contacts.json'

console.log('data yang di import adalah: ' + data[0])

// create loop with map
const cardList = data.map((card) => {
    return (
        <div className='contact-meong'>
            <div className='kucing-pfp'>
                <img src={card.photo} alt='kucing'></img>
            </div>
            <div className='detail-sikucing'>
                <div className='nama-sikucing'>
                    <p>{card.name}</p>
                </div>
                <div className='nomer-wa-sikucing'>
                    <p>{card.phone}</p>
                </div>
                <div className='email-sikucing'>
                    <p>{card.email}</p>
                </div>
            </div>
        </div>
    )
})

const Contact = () => {
    return (
        <>
        <div className='contact-container'>
            {cardList}
        </div>
        </>
    )
}

export default Contact;
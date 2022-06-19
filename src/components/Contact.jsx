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
            {/* {cardList} */}
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[0].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[0].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[0].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[0].email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[1].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[1].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[1].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[1].email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[2].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[2].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[2].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[2].email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[3].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[3].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[3].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[3].email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[4].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[4].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[4].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[4].email}</p>
                    </div>
                </div>
            </div>
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data[5].photo} alt='kucing'></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data[5].name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data[5].phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data[5].email}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
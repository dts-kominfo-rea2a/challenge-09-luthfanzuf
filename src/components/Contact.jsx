// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';


// map data
// const cardList = data.map((card) => {
//     return (
//         <div className='contact-meong'>
//             <div className='kucing-pfp'>
//                 <img src={card.photo} alt='kucing'></img>
//             </div>
//             <div className='detail-sikucing'>
//                 <div className='nama-sikucing'>
//                     <p>{card.name}</p>
//                 </div>
//                 <div className='nomer-wa-sikucing'>
//                     <p>{card.phone}</p>
//                 </div>
//                 <div className='email-sikucing'>
//                     <p>{card.email}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

const Contact = ( {data} ) => {
    return (
        <>
        {/* <div className='contact-container'> */}
            {/* {cardList} */}
            <div className='contact-meong'>
                <div className='kucing-pfp'>
                    <img src={data.photo} alt={data.name}></img>
                </div>
                <div className='detail-sikucing'>
                    <div className='nama-sikucing'>
                        <p>{data.name}</p>
                    </div>
                    <div className='nomer-wa-sikucing'>
                        <p>{data.phone}</p>
                    </div>
                    <div className='email-sikucing'>
                        <p>{data.email}</p>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Contact;
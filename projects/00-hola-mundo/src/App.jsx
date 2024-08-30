import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const usersList = [
    {
        userName: 'IvanSaltos85',
        name: 'Iván Saltos Medina',
        isFollowing: true
    },
    {
        userName: 'monifer88',
        name: 'Mónica Ruíz Lárraga',
        isFollowing: true
    },
    {
        userName: 'ScottMoneto',
        name: 'Scott Saltos Ruíz',
        isFollowing: true
    },
    {
        userName: 'wendyCitaLove',
        name: 'Wendy Peñafiel',
        isFollowing: false
    },
    {
        userName: 'Loca',
        name: 'Heredero',
        isFollowing: false
    }
]

export function App () {
    const fresita = {userName: 'fresita', name: 'Fresia Verónica'}
    const [name, setName] = useState('machitoBuu')
    const [userName, setUserName] = useState('interesada')

    console.log("Rendered with name:", name)

    return (
        <section className='App'>
            {
                usersList.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        name={name}
                    />
                ))
            }
        </section>
    )

    // return (
    //     <section className='App'>
    //         <TwitterFollowCard userName="IvanSaltos85" name="Iván Saltos Medina"/>
    //         {/*Comentario*/}
    //         {/* <TwitterFollowCard userName="scottferoz" name="Scott"/>
    //         <TwitterFollowCard userName="monifer88" name="Mónica Ruíz"/>
    //         <TwitterFollowCard userName={userName} name={name}/>
    //         <TwitterFollowCard userName="wendycitaamor" name="Wendy Peñafiel" initialIsFollowing={true} />
    //         <TwitterFollowCard {...fresita}/> */}

    //         {/* <button onClick={() => setName('Gatito michu michu')}>
    //             Cambiar Nombre
    //         </button>
    //         <button onClick={() => setUserName('Mishelle Loca')}>
    //             Cambiar User
    //         </button> */}
    //     </section>
    // )
}
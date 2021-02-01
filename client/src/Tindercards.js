import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core';
import './Tindercards.css'
import axios from './axios'

function Tindercards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/card');
            setPeople(req.data);
        }
        fetchData();
    }, [])
    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfframe = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className='tindercards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => {
                    return (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfframe(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.imgUrl})` }}
                                className='card'
                            >
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    )
                })}

            </div>

        </div>
    )
}

export default Tindercards

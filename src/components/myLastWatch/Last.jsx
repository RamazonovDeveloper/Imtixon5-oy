import React, { useEffect, useState } from 'react';
import Singlemovie from '../singleMovieItem/SingleMovie';

const Last = () => {
    const [last, setLast] = useState([])


    useEffect(async() => {
        const topProm = await fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=avengers')
        
        const promJson = await topProm.json()
        console.log(promJson)

        console.log('res bu  ',promJson)

        setLast(promJson.Search)

    },[])
    
    return (
        <div className='top'>
            <div className='top__text'>
                <h3>Last Movies</h3>
                <a>View More</a>
            </div>
            <div className='top__cards'>

                {
                    last.map((item, index) => {
                        return <Singlemovie key={index} props={item}/>                    
                    })
                }
            </div>
        </div>
    );
}

export default Last;

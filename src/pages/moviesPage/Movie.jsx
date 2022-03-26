import React from 'react';
import Footer from '../../components/footer/Footer';
import Player from '../../components/moviePlayer/Player';
import Last from '../../components/myLastWatch/Last';
import Navbar from '../../components/navbar/Navbar';
import Top from '../../components/top/Top';

const Movie = () => {
    return (
        <div>
            <Navbar/>
            <Player/>
            <Top/>
            <Last/>
            <Footer/>
        </div>
    );
}

export default Movie;

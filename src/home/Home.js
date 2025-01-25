import React from 'react'
import './home.css';
import Navbar from '../components/navbar/Navbar';
import Body from '../components/body/Body';
import Movie from '../components/movies/Movie';

const Home = () => {
    
    return (
        <div className='home'>
            <Navbar  />  
            <Body  />
            <Movie />
        </div>
    
   
  
    )
}

export default Home
import React from 'react';
import './movie.css';

const Movie = () => {
    const movies = [
        {
            title: "Inception",
            description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            icon: "https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
        },
        // Add more movies as needed
    ];
  return (
    <div className="all">
        <div className="movies-container">
            {movies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img src={movie.icon} alt={movie.title} className="movie-icon" />
                    <div className="movie-description">
                        <div className="movie-title">{movie.title}</div>
                        <div>{movie.description}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className="movie-popular">
            <div className="drawers">
                <h2>POPULAR</h2>
            </div>
            
                
        </div>
</div>
    
  )
}

export default Movie
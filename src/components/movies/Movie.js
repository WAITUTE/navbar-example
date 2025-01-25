import React from 'react';
import './movie.css';

const Movie = () => {
    const movies = [
        {
            title: "Inception",
            description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            icon: "https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg",
            genre: "Sci-Fi",
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
            genre: "Sci-Fi",
        },
        {
            title: "The Dark Knight",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
            genre: "Action",
        },
        {
            title: "Avengers: Endgame",
            description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
            genre: "Action",
        },
        {
            title: "The Notebook",
            description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated by their social differences.",
            icon: "https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg",
            genre: "Romance",
        },
    ];

    const genreCount = movies.reduce((acc, movie) => {
        acc[movie.genre] = (acc[movie.genre] || 0) + 1;
        return acc;
    }, {});

    const mostPopularGenre = Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b);
    const popularMovies = movies.filter(movie => movie.genre === mostPopularGenre);

    return (
        <div className="movie-app">
            <div className="container-b">
                <h2>Recent Update</h2>
                <div className="movies-container">
                    {movies.map((movie, index) => (
                        <div key={index} className="movie-card">
                            <img src={movie.icon} alt={movie.title} className="movie-icon" />
                            <div className="movie-description">
                                <h3 className="movie-title">{movie.title}</h3>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="movie-popular">
                <h2>Most Popular Genre: {mostPopularGenre}</h2>
                <div className="popular-movies">
                    {popularMovies.map((movie, index) => (
                        <div key={index} className="popular-card">
                            <div className="popular-icon-container">
                                <img src={movie.icon} alt={movie.title} className="popular-icon" />
                            </div>
                            <div className="movies-description">
                                <a href="/movie-details" className="movie-title"
                                    style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    <h3>{movie.title}</h3>
                                </a>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movie;

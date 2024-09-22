import React from 'react';
import './body.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef, useState } from 'react';

const Body = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
      setIsMoved(true);
      const imageWidth = 550; // Width of each image
      const margin = 2; // Margin between images
      const moveDistance = imageWidth + margin; // Total distance to move for each slide
      const distance = listRef.current.getBoundingClientRect().x ;

      if (direction === 'left' && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${moveDistance + distance }px)`;
      }

      if (direction === 'right' && slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-moveDistance + distance  }px)`;
      }
    };

    return (
        <div className='Body'>
            <ArrowBackIosIcon
                className='Arrow left'
                onClick={() => handleClick('left')}
                style={{ display: !isMoved && "none" }} 
            />
            <div className="container">
                <div className="view" ref={listRef}>
                    <img className="imgd" src="https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg" alt="" />
                    <img className="imgd" src="https://i.ytimg.com/vi/QKGjEidhQuQ/sddefault.jpg" alt="" />
                    <img className="imgd" src="https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg" alt="" />
                    <img className="imgd" src="https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg" alt="" />
                    <img className="imgd" src="https://cdn.magicdecor.in/com/2023/10/20180555/Elemental-Magic-Anime-Wallpaper-for-Wall.jpg" alt="" />
                </div>
            </div>
            <ArrowForwardIosIcon
                className='Arrow right'
                onClick={() => handleClick('right')}
            />
        </div>
    );
};

export default Body;

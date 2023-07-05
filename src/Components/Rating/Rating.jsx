import React from 'react';
import "./Rating.css"

const Rating = ({rating, setRating}) => {
    return (
        <div className='rating'>
            <div onClick={() => setRating(1)} className={`btn ${rating === 1 ? "active" : "" }`}>1</div>
            <div onClick={() => setRating(2)} className={`btn ${rating === 2 ? "active" : "" }`}>2</div>
            <div onClick={() => setRating(3)} className={`btn ${rating === 3 ? "active" : "" }`}>3</div>
            <div onClick={() => setRating(4)} className={`btn ${rating === 4 ? "active" : "" }`}>4</div>
            <div onClick={() => setRating(5)} className={`btn ${rating === 5 ? "active" : "" }`}>5</div>
        </div>
    );
}

export default Rating;

import React, { useState } from 'react';
import "./App.css"
import star from "../../assets/icon-star.svg"
import Rating from '../Rating/Rating';
import doneimg from "../../assets/illustration-thank-you.svg"

const App = () => {

    const [rating, setRating] = useState(0)
    const [submit, setSubmit] = useState(false)

    return (
        <div className='app'>
            <div className={`flip-card ${submit ? "flip-it" : ""}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card-front-content">
                            <div className="star">
                                <div className="star-container">
                                    <img src={star} alt="rating star" />
                                </div>
                            </div>
                            <div className="text">
                                <h3>How did we do?</h3>
                                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                            </div>
                            <div className="ratings">
                                <Rating rating={rating} setRating={setRating} />
                            </div>
                            <div className="submit">
                                <div className="submit-btn" onClick={() => { setSubmit(rating !== 0) }}>Submit</div>
                            </div>
                        </div>

                    </div>
                    <div className="flip-card-back">
                        <div className="card-back-content">
                            <img src={doneimg} alt="thank you" />
                            <div className="result">
                                You selected {rating} out of 5
                            </div>
                            <div className="text">
                                <h3>Thank you!</h3>
                                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;

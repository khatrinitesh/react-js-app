import React, { useState } from 'react';
import { Cards } from './Constants';
import './style.css';

const FlipCardApp = () => {
    return (
        <>

            {Cards.map((val, index) => {
                const { title, html, css, javascript, react, api, gif, description } = val
                return (
                    <Info key={index} title={title} html={html} css={css} javascript={javascript} react={react} api={api} gif={gif} description={description} />
                )
            })}
        </>
    )
}

export default FlipCardApp

function Info({ title, link, html, css, javascript, react, api, gif, description }) {
    const cardFront = "Welcome to GFG.";
    const cardBack = "Computer Science Portal.";
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };
    return (
        <>
            <h1 className="geeks">GeeksforGeeks</h1>
            <h3>React Example for Flip Card Effect</h3>
            <div className="container">
                <div
                    className={`flip-card ${isFlipped ? "flipped" : ""
                        }`}
                >
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="card-content">
                                {cardFront}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                        <div className="flip-card-back">
                            <div className="card-content">
                                {cardBack}
                            </div>
                            <button
                                className="flip-button"
                                onClick={handleFlip}
                            >
                                Flip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-solid border-[red]'>
                <h2>{title}</h2>
                <p>{html}</p>
                <p>{css}</p>
                <p>{javascript}</p>
                <p>{react}</p>
                <p>{api}</p>
                <a href={gif}>
                    <img src={gif} />
                </a>
                <p>{description}</p>
            </div>
        </>
    )
}

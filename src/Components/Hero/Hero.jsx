import React, { useState, useEffect } from 'react';
import './Hero.css';
import moose from '../../assets/moose.jpg';
import elephant from '../../assets/elephant.jpg';
import lepord from '../../assets/lepord.jpg';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [lepord, elephant,moose];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                    <div className="content">
                        <div className="title">Holovision: Where Imagination </div>
                        <div className="topic">Meets Reality</div>
                        <div className="des">Rediscover the awe-inspiring beauty of extinct flora and fauna through time and space with our evolutionary holovision experiences.Discover lost ecosystems and unlock the secrets of ancient life forms.
                        </div>
                        <div className="buttons">
                            <button className='flora-button'>FLORA</button>
                            <button className='fauna-button'>FAUNA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

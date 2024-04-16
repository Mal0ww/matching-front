import React, { useEffect, useState } from "react";
import estrela from "./estrela/estrela.png";
import "./styles/stars.css";

const HomeLogin = () => {
    const [stars, setStars] = useState([]);

    const randomPosition = () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
    };

    const randomSize = () => {
        const size = Math.floor(Math.random() * 20) + 9; 
        return size;
    };

    const randomDisplayTime = () => {
        return Math.random() * 4000 + 6000; 
    };

    const createStar = () => {
        const newStar = {
            position: randomPosition(),
            size: randomSize(),
            displayTime: randomDisplayTime(), 
        };
        return newStar;
    };

    
    useEffect(() => {
        const createInitialStars = () => {
            const initialStars = Array.from({ length: 20 }, createStar);
            setStars(initialStars);
        };
        createInitialStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star" 
                    style={{ 
                        position: 'absolute', 
                        left: star.position.x, 
                        top: star.position.y, 
                        width: star.size, 
                        height: star.size,
                        animationDuration: `${star.displayTime}ms` 
                    }}
                >
                    <img src={estrela} alt="Estrela" style={{ width: '100%', height: '100%' }} />
                </div>
            ))}
        </>
    );
}

export default HomeLogin;

import React, { useState, useEffect } from 'react';
import './custom.css';

const ChangeBgImageOnScrollApp = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getBackgroundColor = () => {
        // Change background color based on scroll position
        const threshold = 200; // Adjust this threshold as needed

        if (scrollPosition > threshold) {
            return 'rgba(0, 0, 0, 0.8)'; // Example: semi-transparent black
        } else {
            return 'transparent'; // Default background color
        }
    };
    return (
        <>
            <div className="App" style={{ backgroundColor: getBackgroundColor() }}>
                <header className="App-header">
                    <h1>Change Background on Scroll</h1>
                    <p>Scroll down to see the background change.</p>
                </header>
                <div className="mainContent">
                    <p>Excepteur magna proident cillum tempor culpa elit non dolor laborum deserunt Lorem. Anim nisi sint elit ex irure ullamco ullamco voluptate. Duis consectetur aute consectetur exercitation esse sit reprehenderit esse adipisicing do nostrud aliquip consequat. Ex ad excepteur laboris reprehenderit cupidatat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                    <p>Sunt esse commodo minim ipsum ad enim elit quis anim adipisicing cupidatat nisi fugiat.</p>
                </div>
            </div>
        </>
    )
}

export default ChangeBgImageOnScrollApp

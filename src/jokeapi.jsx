import React, { useState } from 'react';
import "./jokeapi.css";

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPunchline, setShowPunchline] = useState(false);

    const fetchJoke = async () => {
        try {
            setIsLoading(true);
            setError(null);
            setShowPunchline(false);
            
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            if (!response.ok) throw new Error('Failed to fetch joke');
            
            const data = await response.json();
            
            if (data.error) throw new Error(data.message);
            setJoke(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewJoke = () => {
        fetchJoke();
    };

    const revealPunchline = () => {
        setShowPunchline(true);
    };

    return (
        <div className='container'>
            <h1 className='title'>😂 Random Joke Generator</h1>
            
            <button 
                className='generate-btn'
                onClick={handleNewJoke}
                disabled={isLoading}
                aria-label={isLoading ? 'Loading joke' : 'Get new joke'}
            >
                {isLoading ? (
                    <>
                        <span className="loading-spinner"></span>
                        Loading...
                    </>
                ) : (
                    'Tell Me a Joke!'
                )}
            </button>

            {error && (
                <p className='error'>⚠️ Error: {error}. Please try again!</p>
            )}

            {joke && !error && (
                <div className='joke-container'>
                    {joke.type === 'twopart' ? (
                        <>
                            <p className='setup'>{joke.setup}</p>
                            <div className="punchline-wrapper">
                                {showPunchline ? (
                                    <p className='delivery'>🎉 {joke.delivery}</p>
                                ) : (
                                    <button 
                                        className='reveal-btn'
                                        onClick={revealPunchline}
                                        aria-label="Reveal punchline"
                                    >
                                        <span className="btn-icon">👇</span>
                                        <span className="btn-text">Show Punchline</span>
                                        <span className="hover-effect"></span>
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <p className='joke'>🎭 {joke.joke}</p>
                    )}
                </div>
            )}

            {!joke && !isLoading && !error && (
                <p className='empty-state'>Click the button to get your first joke! 🎩</p>
            )}
        </div>
    );
};

export default JokeGenerator;
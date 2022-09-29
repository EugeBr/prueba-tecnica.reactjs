import React from 'react';
import { Link } from 'react-router-dom'
import "./App.css";

function HomePage() {
    return (
        <div className='home'>
            <h1>Hello React.</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Link to="/posts" className='app-link'>GO TO POSTS</Link>
        </div>
    );
}

export default HomePage;
import React from 'react';
import {Link} from 'react-router-dom';

import './style/HomePage.css';


const HomePage = () => {    
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    );
}

export default HomePage;
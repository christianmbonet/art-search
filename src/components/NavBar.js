import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <div className='homeButton'>
                    <Link to='/' className='home'>Home</Link>
                </div>
                <div className='carouselButton'>
                    <Link to='/carousel' className='carouselTextNav'>Carousel</Link>
                </div>
                <div className='displayButton'>
                    <Link to='/display' className='display'>Display</Link>
                </div>
                <div className='collectionButton'>
                    <Link to='/collection' className='collection'>Collection</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
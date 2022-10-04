import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png' //<a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by Freepik - Flaticon</a>
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px' }} options={{ max: 55 }}>
                <div className='Tilt-inner pa2'><img alt='logo' src={brain} /></div>
            </Tilt>
        </div>
    )
}

export default Logo
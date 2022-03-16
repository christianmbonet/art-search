import React from 'react';
import Wave from '../images/wave.jpeg'

const Display = () => {
    return (
        <div>
            <div className='imageDisplay'>
                <img className='wave' src={Wave} alt='hokusaiWave'></img>
            </div>
            <div className='displayContainer'>
            <div className='labelContainerDisplay'>
                <div className='label'><span class='titleBoldDisplay'>Title:&nbsp;</span>The Great Wave off Kanagawa</div>
                <div className='label'><span class='titleBoldDisplay'>Artist:&nbsp;</span>Hokusai</div>
                <div className='label'><span class='titleBoldDisplay'>Year:&nbsp;</span>1829–1832</div>
            </div>
            </div>
        </div>
    )
}

export default Display
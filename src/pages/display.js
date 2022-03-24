import React, { useState, useEffect } from 'react';
// import Wave from '../images/wave.jpeg';
import axios from 'axios'

const Display = () => {
    const url = 'https://api.artic.edu/api/v1/artworks';
    const [image, setImage] = useState([])

    useEffect(()=> {
        axios.get(url)
        .then((res) => {
            setImage(res.data.data[1].image_id)
        })
        .catch (err => {
            console.log(err)
        })
    }, )

    return (
        <div>
            <div alt='image'>{image}</div>
            {/* <div className='imageDisplay'>
                <img className='wave' src={Wave} alt='hokusaiWave'></img>
            </div>
            <div className='displayContainer'>
            <div className='labelContainerDisplay'>
                <div className='label'><span className='titleBoldDisplay'>Title:&nbsp;</span>The Great Wave off Kanagawa</div>
                <div className='label'><span className='titleBoldDisplay'>Artist:&nbsp;</span>Hokusai</div>
                <div className='label'><span className='titleBoldDisplay'>Year:&nbsp;</span>1829–1832</div>
            </div>
            </div> */}
        </div>
    )
}

export default Display
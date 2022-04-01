import React, { useState, useEffect } from 'react';
// import Wave from '../images/wave.jpeg';
import axios from 'axios'

const Display = () => {
    const url = 'https://api.artic.edu/api/v1/artworks';
    const [image, setImage] = useState([])
    const [imageURL, setImageURL] = useState([])

    useEffect(()=> {
        axios.get(url)
        .then((res) => {
            // setImage(res.data.data[1].image_id)
            setImageURL(res.data.config.iiif_url)

        })
        .catch (err => {
            console.log(err)
        })
    }, )

    // const visualImage = `https://api.artic.edu/api/v1/artworks/${image}`

    // const staticImage = `https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id`

    return (
        <div>
            {/* <div alt='image' className='image'>{staticImage}</div> */}
            <div alt='image' className='image'>{imageURL}</div>
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
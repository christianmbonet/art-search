import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DataFetch = () => {
    // const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    // const [image, setImage] = useState([])
    const url = 'https://api.artic.edu/api/v1/artworks'

    useEffect(()=> {
        axios.get(url)
        .then((res) => {
            // setData(res.data.data)
            setTitle(res.data.data[1].title)
            setArtist(res.data.data[1].artist_display)
            // setImage(res.data.data[1].image_id)
        })
        .catch (err => {
            console.log(err)
        })
    }, )

  const refreshPage = () => {
        window.location.reload(false);
 }

    return (
        <div className='webPage'>
        <div className='labelContainer'>
                <p> 
                    <span className='titleBold' style={{fontWeight: 'bold'}}>Title:&nbsp;</span>
                    <span>{title}</span>
                </p>
                <p>
                    <span className='titleBold' style={{fontWeight: 'bold'}}>Artist:&nbsp;</span>
                    <span>{artist}</span>
                </p>
                {/* <div alt='image'>{image}</div> */}
        </div>
        <button className='button' onClick={refreshPage}>Refresh</button>
        </div>
    )
}

export default DataFetch
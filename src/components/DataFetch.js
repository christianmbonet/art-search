import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DataFetch = () => {
    // const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    const url = 'https://api.artic.edu/api/v1/artworks'

    useEffect(()=> {
        axios.get(url)
        .then((res) => {
            // setData(res.data.data)
            setTitle(res.data.data[1].title)
            setArtist(res.data.data[1].artist_display)
        })
        .catch (err => {
            console.log(err)
        })
    }, )

    // const refreshPage = () => {
    //     window.location.href=window.location.href;
    // }

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
        </div>
        {/* <button className='button' onClick={refreshPage}>Refresh</button> */}
        </div>
    )
}

export default DataFetch
import React from 'react';
import '../components/index.css'

const CarouselImages = ({src}) => {
    
return (
    <div>
        <img src={src} alt='carouselimages'></img>
        {/* <div className='placeholderImageRow'>
            <img className='degasImage' src={degas} alt='degas'></img>
        </div>
        <div className='placeholderImageRow'>
            <img className='loversImage' src={lovers} alt='lovers'></img>
        </div>
        <div className='placeholderImageRow'>
            <img className='caballoImage' src={caballo} alt='caballo'></img>
        </div> */}
    </div>
)

};

export default CarouselImages;
import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import angel from '../images/angel.jpeg';
import i2 from '../images/caballo.jpeg';
import i3 from '../images/degas.jpeg';
import i4 from '../images/diego.jpeg';
import i5 from '../images/lovers.jpeg';
import i6 from '../images/rem.jpeg';
import i7 from '../images/wave.jpeg';
import '../components/index.css';

const Carousel = () => {
    let carouselArr = [
    <div>
        <img className='angel' src={angel}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Botticelli</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Annunciation</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1485-1492</div>
    </div>,
    <div>
        <img className='caballoImage' src={i2}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Han Gan</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Night Shining White</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>750</div>
    </div>,
    <div>
        <img className='degasImage' src={i3}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Edgar Degas</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Dance Class</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1874</div>
    </div>,
    <div>
        <img className='diego' src={i4}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Diego Velazquez</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Juan de Pareja</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1650</div>
    </div>,
    <div>
        <img className='loversImage' src={i5}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Riza-yi'Abassi</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>The Lovers</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>A.D. 1630</div>
    </div>
    ,
    <div>
        <img className='rem' src={i6}/>
        <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Rembrandt</div>
        <div><span class='titleBoldCollection'>Title:&nbsp;</span>Aristotle with a Bust of Homer</div>
        <div><span class='titleBoldCollection'>Date:&nbsp;</span>1653</div>
    </div>,
    <img className='wave' src={i7}/>

];
    const [carousel, setCarousel] = useState(0);
    const goLeft = () => {
        setCarousel(carousel + 100);
    };

    const goRight = () => {
        setCarousel(carousel - 100);
        (carousel === -100 * (carouselArr.length - 1)) ? setCarousel(0) : setCarousel(carousel - 100);
    };

    return (
        <div>
        <NavBar/>
        <div className='carouselPage'>
            <div className='items'>
            {carouselArr.map((item, index) => {
                return (
                    <div key={index} className='carouselItem' style={{transform: `translateX(${carousel}%)`}}>
                        {item}
                    </div>
                );
            })}
            <div className='directionalArrows'>
                <button className='leftArrow' onClick={goLeft}>Left</button>
                <button className='rightArrow' onClick={goRight}>Right</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;
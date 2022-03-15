import React from 'react';
import NavBar from '../components/NavBar';
import '../index.css';
import rem from '../images/rem.jpeg';
import diego from '../images/diego.jpeg';
import angel from '../images/angel.jpeg';

const Collection = () => {
    return (
        <div>
            <NavBar/>
            <div className='collectionPage'>
            <div className='collectionImageContainer'>
            <div className='images'>
                <img className='rem' src={rem} alt='rembrandtAristotleWithBustOfHomer'></img>
                <div className='collectionLabel'>
                    <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Rembrandt</div>
                    <div><span class='titleBoldCollection'>Title:&nbsp;</span>Aristotle with Bust of Homer</div>
                    <div><span class='titleBoldCollection'>Date:&nbsp;</span>1653</div>
                </div>
            </div>
            <div className='images'>
                <img className='diego' src={diego} alt='velazquezjuanDePareja'></img>
                <div className='collectionLabel'>
                    <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Diego Velazquez</div>
                    <div><span class='titleBoldCollection'>Title:&nbsp;</span>Juan de Pareja</div>
                    <div><span class='titleBoldCollection'>Date:&nbsp;</span>1650</div>
                </div>
            </div>
            <div className='images'>
                <img className='angel' src={angel} alt='botticelliAnnunciation'></img>
                <div className='collectionLabel'>
                    <div><span class='titleBoldCollection'>Artist:&nbsp;</span>Botticelli</div>
                    <div><span class='titleBoldCollection'>Title:&nbsp;</span>Annunciation</div>
                    <div><span class='titleBoldCollection'>Date:&nbsp;</span>1485-1492</div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Collection
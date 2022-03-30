import React from 'react';
import '../index.css';
import rem from '../images/rem.jpeg';
import diego from '../images/diego.jpeg';
import angel from '../images/angel.jpeg';
import wave from '../images/wave.jpeg'

const Collection = () => {
    return (
        <div>
            <div className='collectionPage'>
            <div className='collectionImageContainer'>
            <div className='images'>
                <img className='rem' src={rem} alt='rembrandtAristotleWithBustOfHomer'></img>
                <div className='collectionLabel'>
                    <div><span className='titleBoldCollection'>Artist:&nbsp;</span>Rembrandt</div>
                    <div><span className='titleBoldCollection'>Title:&nbsp;</span>Aristotle with Bust of Homer</div>
                    <div><span className='titleBoldCollection'>Date:&nbsp;</span>1653</div>
                </div>
            </div>
            <div className='images'>
                <img className='diego' src={diego} alt='velazquezjuanDePareja'></img>
                <div className='collectionLabel'>
                    <div><span className='titleBoldCollection'>Artist:&nbsp;</span>Diego Velazquez</div>
                    <div><span className='titleBoldCollection'>Title:&nbsp;</span>Juan de Pareja</div>
                    <div><span className='titleBoldCollection'>Date:&nbsp;</span>1650</div>
                </div>
            </div>
            <div className='images'>
                <img className='angel' src={angel} alt='botticelliAnnunciation'></img>
                <div className='collectionLabel'>
                    <div><span className='titleBoldCollection'>Artist:&nbsp;</span>Botticelli</div>
                    <div><span className='titleBoldCollection'>Title:&nbsp;</span>Annunciation</div>
                    <div><span className='titleBoldCollection'>Date:&nbsp;</span>1485-1492</div>
                </div>
            </div>
            <div className='images'>
            <img className='wave' src={wave} alt='greatwave'></img>
            <div className='collectionLabel'>
                <div className='label'><span className='titleBoldDisplay'>Title:&nbsp;</span>The Great Wave off Kanagawa</div>
                <div className='label'><span className='titleBoldDisplay'>Artist:&nbsp;</span>Hokusai</div>
                <div className='label'><span className='titleBoldDisplay'>Year:&nbsp;</span>1829–1832</div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Collection
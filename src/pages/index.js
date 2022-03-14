import React from 'react';
import DataFetch from '../components/DataFetch';
import NavBar from '../components/NavBar';
import './../components/index.css';

function App() {
  
    return (
      <div className='webPage'>
        <NavBar className='navigation'/>
        <DataFetch/>
      </div>
 );
    }
export default App;

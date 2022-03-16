import React from 'react';
import DataFetch from './components/DataFetch';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
    return (
      <div className='webPage'>
         <Router>
           <NavBar/>
         {/* <Route className='navigation' element={<NavBar/>}/> */}
                <Routes>
                  <Route exact path='/'element={<DataFetch/>}/>
                </Routes>
            </Router>
      </div>
 );
    }
export default App;

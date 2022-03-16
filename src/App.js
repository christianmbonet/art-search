import React from 'react';
import DataFetch from './components/DataFetch';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './pages/carousel';
import Display from './pages/display';
import Collection from './pages/collection';

function App() {
  
    return (
      <div className='webPage'>
         <Router>
           <NavBar/>
         {/* <Route className='navigation' element={<NavBar/>}/> */}
                <Routes>
                  <Route exact path='/'element={<DataFetch/>}/>
                  <Route exact path='/carousel'element={<Carousel/>}/>
                  <Route exact path='/collection'element={<Collection/>}/>
                  <Route exact path='/display'element={<Display/>}/>
                </Routes>
            </Router>
      </div>
 );
    }
export default App;

import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import ListProduct from './components/ListProduct';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Log from './components/Log';


import { BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
    return (

      <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path= '/products' element = {<ListProduct/>}></Route>
      <Route path= '/about' element = {<About/>}></Route>
      <Route path= '/contact' element = {<Contact/>}></Route>
      <Route path= 'Home' element = {<Hello/>}></Route>
      <Route path= 'log' element = {<Log/>}></Route>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
        // <div>
        //     <Header />
        //     <Hello />
        //     <ListProduct />
        //     <About />
        //     <Contact />
        //     <Log/>
        //     <Footer />
           
            
        // </div>
    );
};

export default App;

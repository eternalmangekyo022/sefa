import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';


function App() {
    return (
        <>
            <div className='w-full h-full relative bg-[#e0e0e0]'>
                <Header />
                <h1 className='absolute left-1/2 -translate-x-1/2 mt-5 font-bold text-4xl'>sefa</h1>
                <Carousel />
            </div>
        </>
    );
}

export default App;
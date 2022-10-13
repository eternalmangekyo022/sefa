import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';


function App() {
    return (
        <>
            <div className='w-full h-full relative bg-[#e0e0e0]'>
                <Header />
                <h1 className='absolute left-1/2 -translate-x-1/2 mt-5 font-bold text-4xl'>♪Sefa♪</h1>
                <Carousel />
                <div className='w-[80%] relative left-1/2 -translate-x-1/2 top-[27rem] h-40 border-y-[1px] border-black flex justify-center items-center text-sm'>
                    <span className='w-[80%]'>Szerintem a gitározásban rejlik az élet értelme. Kiskorom óta gitározok, több
                    fellépésem is van városi rendezvényeken és a neten is nagy ismerettséget szereztem.
                    </span>
                </div>
            </div>
        </>
    );
}

export default App;
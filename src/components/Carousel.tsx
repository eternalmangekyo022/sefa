import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import zoli1 from '../img/zoli1.jpg';
import zoli2 from '../img/zoli2.jpg';
import zoli3 from '../img/zoli3.jpg';

const images: string[] = [zoli1, zoli2, zoli3];


export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [[wwidth, height], setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const interval = setInterval(() => setIndex(p => p === images.length - 1 ? 0 : p + 1), 5000);
        window.onresize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        return () => clearInterval(interval);
    });

    return <>
        <AnimatePresence mode='wait'>
            <motion.div
                className='absolute w-full max-w-[30rem] h-80 left-1/2 -translate-x-1/2 mt-20 overflow-hidden flex justify-center items-center rounded-3xl'
                key={index}
                initial={{ opacity: 0, left: wwidth * -1 }}
                animate={{ opacity: 1, left: wwidth / 2 }}
                exit={{ opacity: 0, left: wwidth }}
                transition={{ duration: .5 }}
            >
                <motion.img className='rounded-3xl' src={images[index]} alt="Zoli"/>
            </motion.div>
        </AnimatePresence>
    </>;
}
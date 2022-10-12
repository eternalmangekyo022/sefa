import React, { useState } from 'react';
import { motion } from 'framer-motion';
import zoli1 from '../img/zoli1.jpg';
import zoli2 from '../img/zoli2.jpg';
import zoli3 from '../img/zoli3.jpg';

const images: string[] = [zoli1, zoli2, zoli3];


export default function Carousel() {
    const [index, setIndex] = useState(0);


    return <>
        <motion.div
            className='absolute w-full max-w-[30rem] h-80 left-1/2 -translate-x-1/2 mt-20 overflow-hidden flex justify-center items-center rounded-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7 }}
        >

            <motion.img src={images[index]} alt="" />
        </motion.div>
    </>;
}
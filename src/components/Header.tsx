import React from 'react';
import { motion } from 'framer-motion';

type socialMedia = {
    url: string;
    icon: string;
    top: number;
};

const links: socialMedia[] = [
    {
        url: 'https://twitter.com/komuves_zoli',
        icon: 'https://www.svgrepo.com/show/303260/tiktok-logo-logo.svg',
        top: 1,
    },
    {
        url: 'https://www.youtube.com/c/ZoliKomuves',
        icon: 'https://www.svgrepo.com/show/100836/youtube.svg',
        top: 2,
    },
    {
        url: 'https://twitter.com/komuves_zoli',
        icon: 'https://www.svgrepo.com/show/197949/twitter.svg',
        top: 3,
    },
    {
        url: 'https://www.instagram.com/zolikomuves_/',
        icon: 'https://www.svgrepo.com/show/157806/instagram.svg',
        top: 2,
    },
    {
        url: 'https://open.spotify.com/artist/0SxCiMhHw57mtVCvb97wwC',
        icon: 'https://www.svgrepo.com/show/299472/spotify.svg',
        top: 1,
    },
];


export default function Header() {
    return <>
        <header className='w-full h-24 bg-pink-200 rounded-b-[80%] flex justify-around items-start'>
            {links.map(({ url, icon, top }) => <>
                <motion.img
                    src={icon}
                    onClick={() => window.open(url)}
                    initial={{ y: -100 }}
                    animate={{ y: 10 * top * 1.3 }}
                    transition={{ delay: 0.1 * top }}
                    className='max-w-[3rem] cursor-pointer'
                ></motion.img>
            </>)}
        </header>
    </>;
}
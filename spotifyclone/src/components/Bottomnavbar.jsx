import React from 'react';
import {currentsong} from '../types/bottomnavbar.type.js'
import Currentsong from './Currentsong';
import queue from '../assets/queue.svg';
import miniplayer from '../assets/miniplayer.svg';

import {Shuffle,SkipBack ,CirclePause, SkipForward , RotateCwSquare , MicVocal,Maximize,Volume2 ,Smartphone} from 'lucide-react';


function Bottomnavbar(){

    
    return(
    <footer className='flex flex-row justify-between px-5 py-3 fixed bottom-0 left-0 w-full h-22 bg-black'>

        <section>
            {currentsong.map((song , index)=>(
                <Currentsong
                key={index}
                picture={song.picture}
                title={song.title}
                singer={song.singer}
                />
            ))}
        </section>

        <section>
            <div className='flex flex-row justify-center '>
                <Shuffle className='w-5 h-5 mr-6 mt-3 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                <SkipBack className='w-5 h-5 mr-6 mt-3 text-[#B3B3B3] fill-[#B3B3B3] hover:text-white fill-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                <CirclePause className='w-11 h-11 mr-6 mt-[-1] text-black fill-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                <SkipForward className='w-5 h-5 mr-6 mt-3 text-[#B3B3B3] fill-[#B3B3B3] hover:text-white fill-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                < RotateCwSquare className='w-5 h-5 mr-6 mt-3 text-[#B3B3B3] rotate-180 hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl' />
            </div>

            <div className='flex flex-row justify-between'>
                <h1 className='text-base font-semibold text-[#7B7B7B] mr-2'>0:00</h1>
                <div className='h-1 w-lg bg-[#4D4D4D] rounded-full mt-2.5'>
                    <div className='h-full bg-white rounded-full' style={{ width: '25%' }}>
                    </div>
                </div>
                <h1 className='text-base font-semibold text-[#7B7B7B] ml-2'>4:00</h1>
            </div>
        </section>

        <section className='flex flex-row gap-4 mt-5'>
            <MicVocal  className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
            <img className='w-5 h-5'
            src={queue} alt='queue'/>
            <Smartphone className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
            <div className='flex flex-row gap-1'>
            <Volume2 className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
            <div className='h-1 w-20 rounded-lg bg-[#7B7B7B] mt-2'>
                <div></div>
            </div>
            </div>
            <img className='w-5 h-5'
            src={miniplayer} alt='miniplayer'/>
            <Maximize className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
            
        </section>
    </footer>
    )
}
export default Bottomnavbar;

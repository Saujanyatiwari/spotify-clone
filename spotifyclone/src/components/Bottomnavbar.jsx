import React from 'react';
import {currentsong} from '../types/bottomnavbar.type.js'
import Currentsong from './Currentsong';
import shuffle from '../assets/shuffle.svg';
import backward from '../assets/backward.png';
import pause from '../assets/pause.svg'
import forward from '../assets/forward.png'
import repeat from '../assets/repeat.svg'
import microphone from '../assets/microphone.svg';
import queue from '../assets/queue.svg';
import device from '../assets/device.svg';
import speaker from '../assets/speaker.svg';
import miniplayer from '../assets/miniplayer.svg';
import fullscreen from '../assets/fullscreen.svg';


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
            <div className='flex flex-row justify-center'>
                <img className='w-5 h-5 mr-6 mt-3'
                src={shuffle} alt='shuffle'/>
                <img className='w-4 h-4 mr-6 mt-3'
                src={backward} alt='backward'/>
                <img className='w-11 h-11 mr-6 mt-[-1]'
                src={pause} alt='pause'/>
                <img className='w-4 h-4 mr-6 mt-3'
                src={forward} alt='forward'/>
                <img className='w-5 h-5 mr-6 mt-3'
                src={repeat} alt='repeat'/>   
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
            <img className='w-6 h-6'
            src={microphone} alt='microphone'/>
            <img className='w-5 h-5'
            src={queue} alt='queue'/>
            <img className='w-5 h-5'
            src={device} alt='device'/>
            <div className='flex flex-row gap-1'>
                <img className='w-5 h-5'
            src={speaker} alt='speaker'/>
            <div className='h-1 w-20 rounded-lg bg-[#7B7B7B] mt-2'>
                <div></div>
            </div>
            </div>
            <img className='w-5 h-5'
            src={miniplayer} alt='miniplayer'/>
            <img className='w-5 h-5'
            src={fullscreen} alt='fullscreen'/>
            
        </section>
    </footer>
    )
}
export default Bottomnavbar;

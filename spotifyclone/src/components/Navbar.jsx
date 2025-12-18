import React from 'react';
import ellipsis from '../assets/ellipsis.svg';
import leftarrow from '../assets/leftarrow.svg';
import rightarrow from '../assets/rightarrow.svg';  
import home from '../assets/home.png';
import search from '../assets/searchicon.svg';
import bell from '../assets/bell.svg';
import community from '../assets/community.svg';
import profile from '../assets/profile.png';

function Navbar(){
    return(
        <main className='flex flex-row justify-between text-white m-4'>
            <section>
                 <div className='flex flex-row '>
                     <img className='w-10 h-10'
                     src={ellipsis} 
                     alt='ellipsis'></img>
                    <img className='w-10 h-5 mt-2'
                    src={leftarrow} alt='leftarrow'></img>
                    <img className='w-10 h-5 mt-2'
                    src={rightarrow} alt='rightarrow'></img>
                </div>
            </section>
            <section className='flex flex-row'>
                <div className='bg-[#1F1F1F] rounded-full p-3 mr-2'>
                    <img className='w-8 h-8'
                    src={home} alt='home'></img>
                </div>
                {/* <div className='bg-[#1F1F1F] flex flex-row h-12 w-72 p-2'>
                    <img className='w-8 h-8' 
                    src={search} alt='search'></img>
                    <h1 className='text-[#9A9A9A] text-lg font-semibold'>What do you want to play?</h1>
                </div> */}
                <div className='flex items-center justify-between h-14 bg-[#1f1f1f] rounded-full pl-4 py-3 pr-30 max-w-md mx-auto shadow-xl'>
      <img className='w-5 h-5 filter invert opacity-70 mr-3' src={search} alt='search' />
      <h1 className='text-[#9A9A9A] text-lg font-semibold flex-grow'>What do you want to play?</h1>
    </div>
            </section>
            <section className='flex flex-row space-x-4'>
                <img className='w-6 h-6 mt-4'
                src={bell} alt='bell'></img>
                <img className='w-7 h-7 mt-4'
                src={community} alt='bell'></img>
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1F1F1F]">
                     <img src={profile} alt="profile" className="w-10 h-10 rounded-full bg-black p-1 object-cover"/>
                </div>  
            </section>
        </main>
    )
}
export default Navbar;

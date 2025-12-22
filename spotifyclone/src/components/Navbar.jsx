import React from 'react';
import home from '../assets/home.png';
import profile from '../assets/profile.png';
import {Ellipsis ,ChevronLeft ,ChevronRight, Search,Bell , Users } from 'lucide-react'; 

function Navbar(){
    return(
        <main className='flex flex-row justify-between text-white my-3 mx-4'>
            <section>
                 <div className='flex flex-row '>
                    <Ellipsis className='w-8 h-8 text-white mt-3 mr-3'/>
                    <ChevronLeft className='w-10 h-10 mt-2 text-[#1f1f1f] hover:text-white cursor-pointer'/>
                    <ChevronRight className='w-10 h-10 mt-2 text-[#1f1f1f] hover:text-white cursor-pointer'/>
                </div>
            </section>
            <section className='flex flex-row'>
                <div className='bg-[#1F1F1F] rounded-full p-3 mr-2 hover:bg-[#2A2A2A] transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer'>
                    <img className='w-8 h-8'
                    src={home} alt='home'></img>
                </div>

                <div className='flex items-center justify-between h-14 bg-[#1f1f1f] rounded-full pl-4 py-3 pr-30 max-w-md mx-auto shadow-xl hover:bg-[#2A2A2A] hover:border hover:border-[#7F7F7F]'>
                    <Search className='w-7 h-7 text-[#B3B3B3] mr-3 hover:text-white cursor-pointer'/>
                     <input 
                        type="text" 
                        placeholder="What do you want to play?" 
                        className='bg-transparent text-white text-lg font-semibold flex-grow focus:outline-none placeholder-[#9A9A9A]'
                     />
                 </div>
            </section>
            <section className='flex flex-row space-x-4'>
                <Bell className="w-6 h-6 mt-4 text-gray-400 hover:text-white cursor-pointer" />
                <Users className='w-6 h-6 mt-4 text-gray-400 hover:text-white cursor-pointer'/>
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1F1F1F] transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl">
                     <img src={profile} alt="profile" className="w-10 h-10 rounded-full bg-black p-1 object-cover cursor-pointer"/>
                </div>  
            </section>
        </main>
    )
}
export default Navbar;

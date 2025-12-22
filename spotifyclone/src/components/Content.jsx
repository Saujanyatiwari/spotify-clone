import React from 'react';
import Card from './Card';
import Sectioncomponent from './Sectioncomponent';
import { playlists, spotifySections } from '../types/contents.type.js'; 

function Content(){


    return(
        <main className='bg-[#121212] bg-gradient-to-b from-[#1B022E] from-0% to-[#121212] to-45% p-4 rounded-lg w-[70%] mr-2 ml-1 h-138 overflow-y-auto'>
            <section className='flex flex-row mx-13'>
                <div className='bg-[#7F7F7F40]  hover:bg-white hover:text-black flex flex-row rounded-full px-4 py-2 mr-2 '>
                    <h1 className='font-semibold text-base text-center'>All</h1>
                </div>
                <div className='bg-[#7F7F7F40]  hover:bg-white hover:text-black flex flex-row rounded-full px-4 py-2 mr-2 '>
                    <h1 className='font-semibold text-base text-center'>Music</h1>
                </div>
                <div className='bg-[#7F7F7F40]  hover:bg-white hover:text-black flex flex-row rounded-full px-4 py-2 mr-2 '>
                    <h1 className='font-semibold text-base text-center'>Podcasts</h1>
                </div>

            </section>

           

            <section className='mx-13 my-8 grid grid-cols-4 gap-2'> 
                {playlists.map((playlist, index) => (
                    <Card
                    key={index}
                    picture={playlist.picture}
                    title={playlist.name}
                    />
                    ))}
            </section>

            <section>
                {spotifySections.map((section) => (
                    <Sectioncomponent
                     key={section.id}
                     title={section.title}
                     items={section.items}
                     />  
                      ))}
            </section>
        </main>
    )
}
export default Content;


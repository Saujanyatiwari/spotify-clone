import React from 'react';
import pictures from '../assets/picture.png';
import Card from './Card';
import Sectioncomponent from './Sectioncomponent';

function Content(){

    const playlists = [
  { id: 1, name: 'Quiet Mix', picture:pictures },
  { id: 2, name: 'daylist', picture:pictures },
  { id: 3, name: 'Fun Mix', picture:pictures },
  { id: 4, name: 'Quiet Sad Mix', picture:pictures },
  { id: 5, name: 'Darshan Raval', picture:pictures },
  { id: 6, name: 'Ikko - Mikke', picture:pictures },
  { id: 7, name: 'Oldie', picture:pictures },
  { id: 8, name: 'Calm', picture:pictures },
];

const spotifySections = [
  {
    id: 'section-1',
    title: "It's new Music Friday Night!",
    items: [
      { id: 1, name: 'New music from 21 Savage, Fred again......', picture: pictures },
      { id: 2, name: 'Catch all the latest music from artists yo...', picture: pictures },
      { id: 3, name: 'Love, beats, and a lot of swag with the titl...', picture: pictures },
    ],
  },
  {
    id: 'section-2',
    title: "Soundtrack your Friday late night",
    items: [
      { id: 101, name: 'Fun Road Trip music', picture: pictures },
      { id: 102, name: 'Energetic music', picture: pictures },
      { id: 103, name: 'Energy music picked', picture: pictures },
      { id: 104, name: 'Mellow music picked', picture: pictures },
    ],
  },
];

    return(
        <main className='bg-[#121212] bg-gradient-to-b from-[#1B022E] from-0% to-[#121212] to-45% p-4 rounded-lg w-[70%] mr-2 ml-1'>
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


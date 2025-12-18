import react from 'react';
import Playlist from './Playlist';
import list from '../assets/list.svg';
import plus from '../assets/plus.svg';
import expand from '../assets/expand.svg';
import search from '../assets/searchicon.svg';
import pictures from '../assets/picture.png';

function Sidebar(){
    const playlistsData = [
        { id: 1, title: 'Liked Songs', type: 'Playlist', details: '180 songs', picture: pictures },
        { id: 2, title: 'Your Top Songs 2025', type: 'Playlist', details: 'Spotify', picture:pictures},
        { id: 3, title: 'Soothing', type: 'Playlist', details: 'Playlist', picture:  pictures },
        { id: 4, title: 'Villain Mix', type: 'Playlist', details: 'Spotify', picture:  pictures },
        { id: 5, title: 'Homework Mix', type: 'Playlist', details: 'Spotify', picture:  pictures },
        { id: 6, title: 'Darshan Raval Mix', type: 'Playlist', details: 'Spotify', picture:  pictures },
    ];

    return(
        <main className='w-[29%]  bg-[#121212] rounded-lg p-4 pr-8 mx-2 '>
            <section className='flex flex-row justify-between items-center'>
                <div className='text-lg font-bold '>Your Library</div>
                 <div className='flex flex-row items-center'>
                    <div className='bg-[#1F1F1F] flex flex-row rounded-full p-2 mt-[-1] mr-4 hover:bg-[#2A2A2A] cursor-pointer'>
                        <img className='w-5 h-4 mx-2 mt-1' src={plus} alt='plus'></img>
                        <h1 className='font-semibold text-base mr-2 '> Create </h1>
                        </div>
                        <div>
                            <img className='w-5 h-5' src={expand} alt='expand'></img>
                        </div>
                        </div>
            </section>
            
            <section className='flex flex-row mt-4'>
                <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1 mr-2 hover:bg-[#333333] cursor-pointer '>
                    <h1 className='font-semibold text-base text-center'>Playlists</h1>
                </div>
                <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1 mr-2 hover:bg-[#333333] cursor-pointer'>
                    <h1 className='font-semibold text-base text-center'>Podcasts</h1>
                </div>
                <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1  hover:bg-[#333333] cursor-pointer'>
                    <h1 className='font-semibold text-base text-center'>Albums</h1>
                </div>
        
            </section>
            <section className='flex flex-row justify-between mt-6'>
                <div>
                    <img className='w-5 h-5' src={search} alt='search'></img>
                </div>
                <div className='flex flex-row  '>
                    <h1 className='text-[#7B7B7B] mr-2 font-semibold text-base hover:text-white'>Recently added</h1>
                    <img className='w-5 h-5 mt-0.5 hover:text-white' src={list} alt='list'></img>
                </div>
            </section>
            {/* <section>
                <Playlist/>
            </section> */}

             <section>
                {playlistsData.map(playlist => (
                    <Playlist
                        key={playlist.id}
                        title={playlist.title}
                        type={playlist.type}
                        details={playlist.details}
                        picture={playlist.picture}
                    />
                ))}
            </section>
        </main>
    )
}
export default Sidebar;

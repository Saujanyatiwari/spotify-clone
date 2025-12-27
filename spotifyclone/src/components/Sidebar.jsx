
import Playlist from './Playlist';
import { playlistsData } from '../types/sidebar.type.js'
import { List, Maximize2, Search, Plus } from 'lucide-react';

function Sidebar() {
    return (
        <main className='w-[29%] bg-[#121212] rounded-lg p-4 mx-2 h-138 flex flex-col'>
            
            <article className='pr-4'>
                <section className='flex flex-row justify-between items-center'>
                    <div className='text-lg font-bold '>Your Library</div>
                    <div className='flex flex-row items-center'>
                        <div className='bg-[#1F1F1F] flex flex-row rounded-full p-2 mt-[-1] mr-4 hover:bg-[#2A2A2A] cursor-pointer'>
                            <Plus className='w-6 h-6 text-[#B3B3B3] mx-2 '/>
                            <h1 className='font-semibold text-base mr-2 '> Create </h1>
                        </div>
                        <Maximize2 className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer'/>
                    </div>
                </section>
                
                <section className='flex flex-row mt-4'>
                    <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1 mr-2 hover:bg-[#333333] cursor-pointer '>
                        <h1 className='font-semibold text-base text-center'>Playlists</h1>
                    </div>
                    <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1 mr-2 hover:bg-[#333333] cursor-pointer'>
                        <h1 className='font-semibold text-base text-center'>Podcasts</h1>
                    </div>
                    <div className='bg-[#2A2A2A] flex flex-row rounded-full px-4 py-1 hover:bg-[#333333] cursor-pointer'>
                        <h1 className='font-semibold text-base text-center'>Albums</h1>
                    </div>
                </section>
            </article>

            
            <article className='flex-1 min-h-0 overflow-y-auto mt-6 custom-scrollbar'>
                <section className='flex flex-row justify-between'>
                    <Search className='w-5 h-5 ml-1 text-[#B3B3B3] hover:text-white cursor-pointer'/>
                    <div className='flex flex-row text-[#7B7B7B] transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer hover:text-white '>
                        <h1 className=' mr-2 font-semibold text-base'>Recents</h1>
                        <List className='w-5 h-5 mt-0.5'/>
                    </div>
                </section>

                <section className='mt-4'>
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
            </article>
        </main>
    )
}

export default Sidebar;

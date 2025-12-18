import React from 'react';

function Card({ picture , title }) {
    return (
        <div className='flex flex-row bg-[#7F7F7F40] w-full rounded-lg overflow-hidden'>
            <img 
                className='w-14 h-14 rounded-l-lg object-cover'
                src={picture} 
                alt='picture'
            />
            <h1 className='font-semibold text-base ml-2 self-center truncate pr-2'>
                {title}
            </h1>
        </div>  
    );
}

export default Card;

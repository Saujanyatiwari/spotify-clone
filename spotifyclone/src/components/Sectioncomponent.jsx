import React from 'react';

function Sectioncomponent({ title, items }) {
    return(
        <section className='mx-13 mt-15 mb-5'>
            <div className='flex flex-row justify-between mb-3'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <h1 className='text-base font-bold text-[#7B7B7B]'>Show All</h1>
            </div>
            <article className='flex flex-row gap-4'>
                {items.map((item) => (
                    <div key={item.id} className='hover:bg-[#272727] p-2 rounded-lg'>
                        <img className='w-40 h-40 rounded-lg'
                            src={item.picture}
                            alt='picture' />
                        <p className='text-base font-semibold text-[#7B7B7B] w-30'>{item.name}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}
export default Sectioncomponent;


import React from "react";

function Playlist({picture,title,type,details}){
    return(
        <main className="flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-[#1F1F1F] mt-0.5">
            <section className="mr-3">
                 <img 
                    src={picture} 
                    alt={title} 
                    className="w-14 h-14 rounded-lg mb-1" 
                />
            </section>
            <section className="flex flex-col justify-center">
                <div className="font-bold text-lg text-white truncate">{title}</div>
                <div className="flex flex-row text-md font-semibold text-[#7B7B7B]">
                    <div className="mr-1">{type}</div>
                    <div className='mr-1'>•</div>
                    <div>{details}</div>
                </div>
            </section>
        </main>
    )
}
export default Playlist;


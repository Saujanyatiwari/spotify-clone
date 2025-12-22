
import {CircleMinus,CirclePlus} from 'lucide-react';

function Currentsong( {picture , title , singer}){
return(
    <section className='flex flex-row '>
                <div className='mr-4'>
                    <img 
                    className='w-15.5 h-15.5 rounded-lg'
                    src={picture} 
                    alt='picture' />
                </div>
                <div className='flex flex-col justify-center mr-5'>
                    <h1 className='font-semibold text-base'>{title}</h1>
                    <p className='font-semibold text-sm text-[#7B7B7B]'>{singer}</p>
                </div>
                <div className='flex flex-row justify-center mt-5'>
                    {/* <img className='w-5 h-5 mr-3'
                    src={minus} alt='minus'/> */}
                    <CircleMinus className='w-5 h-5 mr-3 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                    {/* <img className='w-5 h-5'
                    src={add} alt='add'/> */}
                    <CirclePlus className='w-5 h-5 text-[#B3B3B3] hover:text-white cursor-pointer
                    transform delay-150 duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl'/>
                </div>
            </section>
    
)
}
export default Currentsong;
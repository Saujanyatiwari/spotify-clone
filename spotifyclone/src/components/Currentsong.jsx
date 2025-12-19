import minus from '../assets/minus.svg';
import add from '../assets/add.svg';

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
                    <img className='w-5 h-5 mr-3'
                    src={minus} alt='minus'/>
                    <img className='w-5 h-5'
                    src={add} alt='add'/>
                </div>
            </section>
    
)
}
export default Currentsong;
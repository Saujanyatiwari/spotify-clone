import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
function Main() {
    return(
        <main className='flex flex-row'>
            <Sidebar />
            <Content /> 
        </main>
    )
}
export default Main;
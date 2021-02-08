import React from 'react'
import Usedarkmode from './Usedarkmode'
function Mode() {
    const [colortheme, setTheme] = Usedarkmode();
    return (
      <>
           <span onClick={()=>setTheme(colortheme)} className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
               {colortheme ==='light'?
           <img src="https://img.icons8.com/color/48/000000/moon-satellite.png"/>:

           <img src="https://img.icons8.com/fluent/48/000000/sun.png"/>}  

            </span> 
       </>
    )
}

export default Mode

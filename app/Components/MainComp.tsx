"use client"
import React, {  useContext, useState } from 'react';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import Image from 'next/image';
import { ThemeContext } from './Theme';

//Main Component Function
const MainComp = () => {
    const {theme, switchLight, switchDark} = useContext(ThemeContext);
    
    //Return Statement
    return (
        <div className='flex justify-center  items-center '>
        <div className=" mb-20 h-[500px] flex bg-white dark:bg-slate-900 flex-col border items-center gap-y-4  w-full md:w-4/12 shadow-sm rounded-md">
     <div className='flex text-end mt-2 mb-2'> 
        {/*Handles Icons*/}
         {
         theme === 'dark' ? (<div> <CiLight onClick={ switchLight} size={35} color='white' className='cursor-pointer'/>
         </div>) :(<div>
         <CiDark onClick={switchDark} size={35} className='cursor-pointer'/></div>) }</div>

{/*Image*/}
<Image src="/images/shahmir.png" alt="Image of Syed Shahmir Sultan" width={300} height={200}/>
{/* Name */}
  <h1 className="text-2xl font-bold text-gray-950 dark:text-white">Syed Shahmir Sultan</h1>
  {/* text*/}
  <p className='mt-2 font-semibold text-gray-950 text-xl dark:text-white'>A Full-Stack Web Developer</p>    
        </div>
            
        </div>
    );
}

export default MainComp;

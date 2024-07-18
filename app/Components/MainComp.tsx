"use client"
import React, { useContext } from 'react';
import { ThemeContext } from './Theme';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import Image from 'next/image';

//Main Component Function
const MainComp = () => {
    const {theme, switchLight, switchDark} = useContext(ThemeContext);
    return (
        <div className='flex justify-center items-center bg-white dark:bg-slate-900'>
        <div className=" mb-20 h-[500px] flex flex-col border items-center gap-y-2  w-full md:w-4/12 shadow-sm rounded-md">
     <div className='flex justify-end mt-2'> 
         {
         theme == "dark" ? (<div>
         <CiDark onClick={()=> switchLight()} size={24} color={'black'}/></div>) 
        :(<div> <CiLight onClick={()=> switchDark()} size={24} color={'white'}/>
         </div>)}</div>

<Image src="/images/shahmir.png" alt="Image of Syed Shahmir Sultan" width={150} height={150}/>
  <h1 className="text-3xl font-bold text-gray-950 dark:text-white">Syed Shahmir Sultan</h1>
  <p className='mt-2 font-semibold text-gray-950 text-2xl dark:text-white'>A Full-Stack Developer</p>    
        </div>
            
        </div>
    );
}

export default MainComp;

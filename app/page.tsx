import React from 'react';
import MainComp from './Components/MainComp';

const Home = () => {
  return (
    <div className="bg-white w-full flex flex-col mt-20 justify-center space-y-4">
<h1 className='text-gray-950 font-4xl flex justify-center items-center'>Theme Changer</h1>
      <MainComp/>
    </div>
  );
}

export default Home;
``
import React from 'react';
import MainComp from './Components/MainComp';

//Main Function that will render
const Home = () => {
  return (
    <div className="bg-white w-full flex flex-col mt-20 justify-center space-y-12">
      {/* Title */}
<h1 className='text-gray-950 text-3xl font-bold  flex justify-center items-center'>Theme Changer</h1>
{/* MainComp */}
      <MainComp/>
    </div>
  );
}

export default Home;

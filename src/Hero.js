import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl text-[#00df9a] sm:text-6xl text-4xl font-bold md:py-6'>
          L'initiation <br/> à la recherche
        </h1>
        <div className='flex justify-center items-center'>
          <div>
            <span className='md:text-2xl text-xl py-4'>
              Sous la supervision de la Présidence de l'Université 
            </span>
            <Typed
            className='md:text-2xl text-xl sm:text-4xl text-xl font-bold pl-1'
              strings={[" D’Antananarivo"," Mahajunga"," Antsiranana"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <span className='md:text-2xl text-xl py-4'> nous avons le plaisir d'annoncer l'organisation d'une formation de haute qualité,
              qui se tiendra du 05 au 16 décembre 2024. 
            </span>
          </div>  
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><a href="#inscrire">S'inscrire</a></button>
      </div>
    </div>
  );
};

export default Hero;

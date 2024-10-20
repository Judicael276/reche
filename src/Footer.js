import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto text-gray-300'>
    <div class="lg:col-span-2 lg:px-8 lg:py-8 mt-6 text-center flex flex-col justify-center">
    <h1 class="md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2" id="Intervenant">Intervenant principal</h1>
    <p>Fort de mon expérience acquise au sein de plusieurs institutions internationales, notamment
    aux États-Unis, en Australie, dans plusieurs pays européens, ainsi qu'à l'Université
    d'Antsiranana et à l'Institut Supérieur de Technologie (IST), j'ai été témoin des défis auxquels
    sont confrontés les jeunes doctorants et les enseignants-chercheurs dans nos institutions. En
    tant qu'auteur de plus de 100 publications scientifiques, avec un H-Index de 24 et 1850
    citations, et ayant collaboré avec des chercheurs de renommée internationale, j'ai développé
    une expertise que je souhaite partager avec la communauté académique à Madagascar.</p>
    </div>
        <div className="max-w-[800px] w-full py-8 mx-auto text-center flex flex-col justify-center">
            <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Ensemble, agissons dès maintenant pour bâtir un avenir meilleur. 
            </h1>
            <p className='py-4'>Ne manquez pas cette opportunité unique de renforcer vos compétences en recherche et de
            contribuer à l’amélioration des performances académiques de nos institutions. 
            </p>
            <h6 className='font-medium text-gray-400'>Je serai honoré de vous accueillir nombreux à cette formation, et j'ai hâte de partager
            cette expérience enrichissante avec vous.</h6>
            <div className='flex gap-8 md:w-[75%] mt-6 mx-auto justify-center'>
                <FaFacebookSquare size={30} />
            </div>
        </div>
    </div>
  );
};

export default Footer;

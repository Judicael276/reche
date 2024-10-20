import React, { useState } from 'react';
import axios from 'axios';
import Hero from './Hero'
import Footer from './Footer'
import swal from "sweetalert";
function Registration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        status: ''
    });
    const [error, setError] = useState('');
    const [loadign, setLoading] = useState(false);

    const locations = [
        { name: "Université de Antananarivo", date: '2024-12-05 à 2024-12-07' },
        { name: "Université de Mahajanga", date: '2024-12-09 à 2024-12-11' },
        { name: "Université de Antsiranana", date: '2024-12-13 à 2024-12-16' }
    ];

    const statuses = [
        'Enseignants (permanents et non permanents)',
        'Étudiants en thèse (1ère, 2ème et 3ème année)',
        "Étudiants en fin de cycle (Master, Diplome de Ingénieur)",
        "Industriels et passionnés de la recherche"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Phone number validation for Madagascar
        const phoneRegex = /^\+261\d{9}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            setError('Le Numéro de téléphone doit etre au format +261xxxxxxxxx.');
            setLoading(false);
            return;
        }

        // Clear error if number is valid and submit form
        setError('');
        try{
            axios.post('https://www.e-coress.com/research-training-backend/register.php', formData)
                .then(response => {
                    swal({
                      title: response.data.message,
                      icon: "success",
                    });
                    setLoading(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phoneNumber: '',
                      location: '',
                      status: ''
                  });
                })
        }
        catch(error){
            console.log(error)
             swal({
              title: "échec d'envoi",
              icon: "warning",
            });
        } finally {
        setLoading(false); // Set loading to false in both success and error cases
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when phone number becomes valid
        if (name === 'phoneNumber') {
            const phoneRegex = /^\+261\d{9}$/;
            if (phoneRegex.test(value)) {
                setError('');  // Clear error if the number is valid
            }
        }
    };

    return (
        <div className="Register">
            <Hero />
        <div
          class="mt-8 rounded-xl bg-white px-6 py-16 shadow-lg lg:px-8 lg:py-16"
        >
            <div class="row">
                <div class="lg:col-6">
                  <div class="h-full rounded-lg bg-[#FAFAFA] p-6 lg:p-8">
                    <h3 class="h5 mb-8 font-primary text-gray-400 text-xl text-center">Cette formation a pour objectif de transmettre des compétences pointues et des connaissances
                    pratiques pour exceller dans le domaine de la recherche scientifique. Elle est spécialement
                    conçue pour les enseignants et chercheurs, ainsi que pour les étudiants et professionnels
                    désireux de développer leurs capacités dans ce domaine stratégique. 
                    </h3>
                    <span class="text-[#00df9a] py-8 btn btn-primary font-bold text-4xl block w-full font-bold capitalize" id="Formation">Objectifs de la formation</span>
                    <div class="flex justify-between grid md:grid-cols-3 gap-8">
                      <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Renforcer les capacités des jeunes chercheurs et enseignants-chercheurs dans le
                            développement de projets de recherche structurés. </p>
                        </div>
                      </div>
                      <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Apprendre à rédiger des articles scientifiques de qualité et les publier dans des revues
                            internationales de renom (Elsevier, Springer, Nature) gratuitement.</p>
                        </div>
                      </div>
                       <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Maîtriser les techniques pour solliciter des collaborations internationales, en
                            particulier avec des institutions américaines. 
                            </p>
                        </div>
                      </div>
                       <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Concevoir des projets de recherche et savoir comment obtenir des financements pour
                            les réaliser. 
                            </p>
                        </div>
                      </div>
                      <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Savoir gérer un projet de thèse de doctorat en trois ans avec des publications
                            scientifiques de haut niveau. 
                            </p>
                        </div>
                      </div>
                      <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Augmenter son nombre de citations et améliorer son H-Index. 
                            </p>
                        </div>
                      </div>
                      <div class="hover:scale-105 duration-300">
                        <div
                          class="flex flex-col items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                        >
                          <p class="text-gray-400"> Comprendre les critères de classement des chercheurs à l’international (Citations, HIndex, FWCI). 
                            </p>
                        </div>
                      </div>
                    </div>
                    <h3 class="h5 mt-8 font-primary text-gray-400 ">Je suis convaincu que cette formation contribuera de manière significative à l'essor de la
                        recherche scientifique au sein de l'Université d'Antsiranana et au-delà. 
                    </h3>
                  </div>
                </div>
                <div class="mt-10 lg:col-6 lg:mt-0">
                 <span
                      class="text-[#00df9a] py-8 btn btn-primary font-bold text-4xl block w-full font-bold capitalize" id="Cible"
                      >Public ciblé</span
                    >
                  <div
                    class="mb-6 flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8"
                  >
                    <div
                      class="relative inline-flex h-24 w-24 items-center justify-center p-3"
                    >
                      <svg
                        class="absolute left-0 top-0 h-full w-full"
                        width="90"
                        height="90"
                        viewBox="0 0 90 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.1"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                          fill="#FFCC99"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="h5 font-primary font-bold text-xl text-gray-400">Enseignants (permanents et non permanents)</h3>
                      <p class="mt-4 text-gray-400">
                         Pour ceux qui souhaitent se
                        distinguer dans la recherche scientifique et établir des collaborations avec des
                        universités de renom à l’international, cette formation est faite pour vous. Vous aurez
                        l'opportunité d'acquérir les compétences nécessaires pour mener des projets de
                        recherche d'envergure et publier dans des revues scientifiques de qualité. 
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-6 flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8"
                  >
                    <div
                      class="relative inline-flex h-24 w-24 items-center justify-center p-3"
                    >
                      <img src="images/icons/feature-icon-8.svg" alt="" />
                      <svg
                        class="absolute left-0 top-0 h-full w-full"
                        width="90"
                        height="90"
                        viewBox="0 0 90 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.1"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                          fill="#FFCC99"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="h5 font-primary font-bold text-xl text-gray-400">Étudiants en thèse (1ère, 2ème et 3ème année) </h3>
                      <p class="mt-4 text-gray-400">
                        Si vous êtes doctorant et que vous
                        avez reçu un sujet de thèse sans accompagnement adéquat, ou si vous avez des
                        difficultés à rédiger des articles de qualité pour les soumettre à des journaux
                        internationaux, cette formation vous apportera des solutions concrètes et des outils
                        pour réussir.
                      </p>
                    </div>
                  </div>
                    <div
                        class="flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8"
                    >
                        <div
                          class="relative inline-flex h-24 w-24 items-center justify-center p-3"
                        >
                          <img src="images/icons/feature-icon-9.svg" alt="" />
                          <svg
                            class="absolute left-0 top-0 h-full w-full"
                            width="90"
                            height="90"
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.1"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                              fill="#FFCC99"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 class="h5 font-bold text-xl text-gray-400">Étudiants en fin de cycle (Master, Diplôme d'Ingénieur)</h3>
                          <p class="mt-4 text-gray-400">
                            Ceux qui souhaitent
                            poursuivre leurs études en troisième cycle (doctorat) et réussir leur thèse en trois ans
                            avec des publications de qualité, cette formation vous permettra de bien vous préparer
                            et d’acquérir des compétences essentielles pour exceller. 

                          </p>
                        </div>
                    </div>
                    <div
                        class="flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8"
                    >
                        <div
                          class="relative inline-flex h-24 w-24 items-center justify-center p-3"
                        >
                          <img src="images/icons/feature-icon-9.svg" alt="" />
                          <svg
                            class="absolute left-0 top-0 h-full w-full"
                            width="90"
                            height="90"
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.1"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                              fill="#FFCC99"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 class="h5 font-bold text-xl text-gray-400">Industriels et passionnés de la recherche</h3>
                          <p class="mt-4 text-gray-400">
                           Pour ceux qui s'intéressent à la recherche
                            scientifique, que vous soyez issus du monde académique ou industriel, cette formation
                            vous fournira les bases nécessaires pour entreprendre des projets de recherche
                            ambitieux. 
                          </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center  bg-white">
                <div className="py-16 container mx-auto my-4 px-4 lg:px-8">
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <div>
                                <h1 className="md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2" id="inscrire">
                                    S'inscrire
                                </h1>
                                <ul className="mt-5 text-gray-400">
                                    <li><span className="font-bold">Frais d’inscription :</span> gratuitement</li>
                                    <li><span className="font-bold">Frais de participation :</span> 25000 Ar par personne (cette somme couvrira l’achat des
                                    billets d'avion + logement + autres dépenses des intervenants).</li>
                                </ul>
                            </div>
                        </div>
                         {error && <p style={{color: 'red'}}>{error}</p>}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                          <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="firstName" 
                            placeholder="Nom*"
                            value={formData.firstName} 
                            onChange={handleChange} 
                            required 
                          />
                          <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="lastName" 
                            placeholder="Prénom*"
                            value={formData.lastName} 
                            onChange={handleChange} 
                            required 
                          />
                          <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email*"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                          />
                          <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text"
                            name="phoneNumber" 
                            placeholder="Numéro de téléphone*"
                            value={formData.phoneNumber} 
                            onChange={handleChange} 
                            required 
                            />
                            <select name="status" onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required>
                                <option value="">Votre Status</option>
                                {statuses.map((status, index) => (
                                    <option key={index} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                            <select className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="location" onChange={handleChange} required>
                                <option value="">Lieu & date</option>
                                {locations.map((loc, index) => (
                                    <option key={index} value={loc.name}>
                                        {loc.name} ({loc.date})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="my-2 mt-5 w-1/2 lg:w-1/4">
                          <button className="uppercase text-sm font-bold tracking-wide bg-[#00df9a] text-white p-3 rounded-lg w-full 
                                  focus:outline-none focus:shadow-outline" type="submit">{loadign == true ? "...": "Envoyer"}</button>
                        </div>
                      </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6  px-8 py-12 ml-auto bg-[#00df9a] rounded-2xl">
                        <div className="flex flex-col text-white">
                            <p className="text-white font-bold">
                                Ne manquez pas cette opportunité unique de renforcer vos compétences en recherche et de
                                contribuer à l’amélioration des performances académiques de nos institutions. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        <Footer />
        </div>
    );
}

export default Registration;

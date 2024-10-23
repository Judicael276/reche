// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DownloadCSV from './DownloadCSV';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [locations] = useState([
        { name: "Université de Antananarivo", date: '05-12-2024 à 07-12-2024' },
        { name: "Université de Mahajanga", date: '09,10-12-2024 et 12-12-2024' },
        { name: "Université de Antsiranana", date: '16-12-2024 à 18-12-2024' }
    ]);

    useEffect(() => {
        // Fetch users data from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://www.e-coress.com/research-training-backend/get-registrations.php');
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleLocationChange = (e) => {
        const location = e.target.value;
        setSelectedLocation(location);
        if (location) {
            setFilteredUsers(users.filter(user => user.location === location));
        } else {
            setFilteredUsers(users);
        }
    };



    return (
        <div className="bg-white  h-screen my-4 px-4 w-full ">
             <h1 className=' text-4xl font-bold md:py-6'>
              Liste des utlisateurs inscris {filteredUsers.length}
            </h1>
            <div className="flex justify-between mb-8">
            <select className=" bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={selectedLocation} onChange={handleLocationChange}>
                <option value="">Université de ...</option>
                {locations.map((location, index) => (
                    <option key={index} value={location.name}>
                        {location.name}
                    </option>
                ))}
            </select>
            <DownloadCSV data={filteredUsers} fileName={`Inscription ${selectedLocation}`} />
           </div>
            <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table class="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Reference
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Nom
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Prénom
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Email
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Numméro de téléphone
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Status
                        </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 bg-slate-50">
                        <p class="text-sm font-normal leading-none text-slate-500">
                            Lieu
                        </p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                            {filteredUsers.map((user, index) => (
                           
                                <tr  key={index} class="hover:bg-slate-50 border-b border-slate-200">
                                    <td class="p-4 py-5">
                                    <p class="block font-semibold text-sm text-slate-800">#{user.id}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.firstName}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.lastName}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.email}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.phoneNumber}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.status}</p>
                                    </td>
                                    <td class="p-4 py-5">
                                    <p class="text-sm text-slate-500">{user.location}</p>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;

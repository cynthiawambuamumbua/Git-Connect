import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

interface Developer {
  id: string;
  name: string;
  bio: string;
  profilePic: string;
}
const dummyDevelopers: Developer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    bio: 'Full Stack Developer with a passion for building scalable web applications.',
    profilePic: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Bob Smith',
    bio: 'Frontend Developer specialized in React and Vue.js.',
    profilePic: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    bio: 'Backend Developer experienced in Node.js and Express.',
    profilePic: 'https://via.placeholder.com/150',
  },
];

const DevelopersList: React.FC = () => {
  return (
    <div className="">
        <Navbar />
        <div className='flex justify-between my-6'>
        <h1 className="text-2xl font-bold mx-6 mb-6">GitConnect Developers</h1>
        <p className="p-2 bg-gray-800 text-white font-bold mx-6 mb-6">View All</p>
        </div>
      
      <div className="grid mx-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyDevelopers.map(developer => (
          <Link key={developer.id} href={`/developer/${developer.id}`}>
            <div className="bg-white h-52 rounded-lg drop-shadow-2xl p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={developer.profilePic}
                alt={`${developer.name}'s profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{developer.name}</h3>
              <p className="text-gray-600 text-center">{developer.bio}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DevelopersList;
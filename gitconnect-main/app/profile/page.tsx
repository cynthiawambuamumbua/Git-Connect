'use client'

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import React from 'react';

interface Developer {
  id: string;
  name: string;
  bio: string;
  profilePic: string;
  education: string[];
  workExperience: string[];
  githubRepos: string[];
}

const dummyDevelopers: Developer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    bio: 'Full Stack Developer with a passion for building scalable web applications.',
    profilePic: 'https://via.placeholder.com/150',
    education: ['B.Sc. in Computer Science - XYZ University'],
    workExperience: ['Software Engineer at ABC Corp', 'Intern at DEF Inc.'],
    githubRepos: ['https://github.com/alice/repo1', 'https://github.com/alice/repo2'],
  },
  {
    id: '2',
    name: 'Bob Smith',
    bio: 'Frontend Developer specialized in React and Vue.js.',
    profilePic: 'https://via.placeholder.com/150',
    education: ['B.A. in Web Development - XYZ College'],
    workExperience: ['Frontend Developer at GHI Ltd', 'Freelancer'],
    githubRepos: ['https://github.com/bob/repo1'],
  },
  {
    id: '3',
    name: 'Charlie Brown',
    bio: 'Backend Developer experienced in Node.js and Express.',
    profilePic: 'https://via.placeholder.com/150',
    education: ['B.Sc. in Information Technology - ABC University'],
    workExperience: ['Backend Developer at JKL Corp', 'Intern at MNO LLC'],
    githubRepos: [],
  },
];

const DeveloperProfile: React.FC = () => {
  const { id } = useParams(); // Use useParams to get the dynamic id

  // Find the developer based on the ID
  const developer = dummyDevelopers.find((dev) => dev.id === id);

  if (!developer) {
    return <div className="text-center">Loading...</div>; // Handle loading or not found state
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <img
          src={developer.profilePic}
          alt={`${developer.name}'s profile`}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{developer.name}</h1>
          <p className="text-gray-600">{developer.bio}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="list-disc ml-5 mb-6">
        {developer.education.map((edu, index) => (
          <li key={index} className="text-gray-700">{edu}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <ul className="list-disc ml-5 mb-6">
        {developer.workExperience.map((job, index) => (
          <li key={index} className="text-gray-700">{job}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">GitHub Repositories</h2>
      {developer.githubRepos.length > 0 ? (
        <ul className="list-disc ml-5 mb-6">
          {developer.githubRepos.map((repo, index) => (
            <li key={index} className="text-gray-700">
              <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {repo}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No repositories available.</p>
      )}
    </div>
  );
};

export default DeveloperProfile;

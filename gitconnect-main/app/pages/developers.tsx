"use client";
import { useEffect, useState } from "react";
import { Databases } from "appwrite";
import client from "@/appwriteClient";

// interface for Developer
interface Developer {
  $id: string;
  name: string;
  email: string;
}

const database = new Databases(client);

const Developers = () => {
  // Specify the type of developers as an array of Developer
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await database.listDocuments("mumbuawambua", "gitconnect");
        setDevelopers(response.documents);
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      }
    };
    fetchDevelopers();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Registered Developers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {developers.map((dev) => (
          <div key={dev.$id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{dev.name}</h2>
            <p>Email: {dev.email}</p>
            <a href={`pages/profile/${dev.$id}`} className="text-blue-500 underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Account, Client } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("wambuamumbua");

const Auth = () => {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Error message state
  const [success, setSuccess] = useState(false); // Success state
  const [isSigningUp, setIsSigningUp] = useState(true); // Toggle between signup and login
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle

  const router = useRouter(); // Initialize the router
  const account = new Account(client); // Initialize Appwrite Account

  // Check user authentication
  const checkUserAuth = async () => {
    try {
      const user = await account.get();
      console.log("User authenticated:", user);
    } catch (error) {
      console.error("User is not authenticated", error);
    }
  };

  checkUserAuth();

  // Handle signup and automatically sign in
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      // Create user account
      const user = await account.create("unique()", email, password);
      console.log("User created:", user);

      // Automatically sign in after signup
      await account.createSession(email, password);

      setSuccess(true);
      setError(""); // Clear any previous error messages

      // Redirect to profile page after successful sign-in
      router.push(`pages/profile`);
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("Sign-up failed. Try again.");
    }
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Reset previous error and success messages
    setError("");
    setSuccess(false);
  
    try {
      // Try creating a session using email and password
      console.log("Attempting to sign in with email:", email, "and password:", password);
  
      const session = await account.createSession(email, password); // Attempt login
      
      if (session) {
        console.log("Sign-in successful:", session); // Log the session details
        
        setSuccess(true); // Set success state
        setError(""); // Clear any previous error messages
  
        // Redirect to profile page after successful sign-in
        router.push("/pages/profile"); // Ensure this route is correctly set in Next.js
      } else {
        throw new Error("Session creation failed. Check credentials.");
      }
    } catch (error: any) {
      // Log the full error object for better debugging
      console.error("Error during sign-in:", error);
  
      // Provide detailed feedback in the error message to help in debugging
      setError(`Sign-in failed: ${error?.message || "Unknown error occurred"}`);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={isSigningUp ? handleSignup : handleSignin}
        className="p-6 bg-white rounded-lg shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-4">{isSigningUp ? "Sign Up" : "Sign In"}</h1>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{isSigningUp ? "Sign-up successful!" : "Sign-in successful!"}</p>}

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-2 p-2 border rounded w-full text-black" // Added 'text-black' to ensure visibility
          required
        />

        {/* Password Input with Toggle Visibility */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border rounded w-full text-black" // Added 'text-black' to ensure visibility
            required
          />
          <span
            className="absolute right-2 top-2 cursor-pointer text-blue-500" // Make the text color noticeable
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            {showPassword ? "Hide" : "Show"} {/* Text to toggle */}
          </span>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isSigningUp ? "Sign Up" : "Sign In"}
        </button>

        {/* Toggle between Sign Up and Sign In */}
        <p className="mt-4 text-sm text-center">
          {isSigningUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            {isSigningUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
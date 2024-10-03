import Auth from "./signup/page";
// import EditProfile from "./profile/edit-profile/id";
// import Profile from "./profile/id";
import Developers from "./pages/developers";
import Navbar from './components/navbar/Navbar'
import DeveloperPosts from "./components/posts/DeveloperPosts";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DeveloperPosts />
       {/* <Auth/> */}
      {/* <EditProfile/> */}
      {/* <Profile/> */}
      {/* <Developers/>  */}
      
      <Footer />
    </div>
  )
}
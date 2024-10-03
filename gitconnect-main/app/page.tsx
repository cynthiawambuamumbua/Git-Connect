import Auth from "./signup/page";
import EditProfile from "./profile/edit-profile/id";
import Profile from "./profile/id";
import Developers from "./pages/developers";
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";
import DeveloperPosts from "./components/posts/DeveloperPosts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DeveloperPosts />
       {/* <Auth/> */}
      <EditProfile/>
      <Profile/>
      {/* <Developers/>  */}
      
      <Footer />
    </div>
  )
}
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero-Section/Hero";
import Profile from "./components/Profile/Profile";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <>
      <Navbar/>
      <Hero />
      <Profile/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App;

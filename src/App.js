import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contacts";
import Services from "./components/Services";
import Login from "./components/Login";


import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/MediaQuery.scss"
import "./styles/Login.scss"






function App() {
  return (
<Router>
<Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/Login" element={<Login />} />


  </Routes>
<Footer />
</Router>
  );
}

export default App;

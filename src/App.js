import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
 import Contact from "./components/Contact";
import Services from "./components/Services";
import "./styles/App.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/mediaquery.css";
function App() {
  return (
    <div className="App"  >

      <Router>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      <Footer/>
      </Router>
    
    </div>
  );
}

export default App;

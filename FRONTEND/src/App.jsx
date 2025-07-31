import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Review from "./Components/Review"



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          {/* <Route path="/about" element={<About />} /> */}
        
        </Routes>
        {/* <Footer /> */}
      
    </BrowserRouter>
  )
}

export default App;
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <div className="text-xl flex justify-between items-center w-full h-20 px-7 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white fixed z-10 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl animate-gradient-x">
     <div>
        <h1 className="text-2xl font-bold ml-6 text-white font-serif transform transition-all duration-500 ease-in-out hover:text-cyan-400 animate-pulse hover:scale-110 cursor-pointer" onClick={() => setShowPopup(true)}>
          TECH FUSION
        </h1>
      </div>
      <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<FaTimes size={30} className="text-white cursor-pointer transition-transform duration-500 ease-in-out rotate-180 hover:rotate-0 hover:scale-125" />
        ) : (<FaBars size={30} className="text-white cursor-pointer transition-transform duration-300 ease-in-out scale-105 hover:scale-125 hover:rotate-90" />
        )}
      </div>
      <ul className={`md:flex ${isMobile ? "flex flex-col space-y-2 absolute top-16 left-1/2 transform -translate-x-1/2 cursor-pointer bg-gradient-to-r from-blue-600 to-teal-700 text-white p-4 w-4/5 md:w-auto shadow-lg rounded-lg animate-fade-in-down" : "hidden"} md:space-x-12 capitalize`} >
        {[{ path: "/", label: "Home" }, 
        { path: "/about", label: "About" },
        { path: "/events", label: "Our Events" },
        // { path: "/gallery", label: "Gallery" }, 
        { path: "/contact", label: "Contact" }].map(({ path, label }) => (
          <li key={path}className="cursor-pointer capitalize font-medium text-white transition-all duration-300 ease-in-out hover:text-pink-500 hover:scale-110 hover:translate-x-2 hover:bg-gray-800 px-3 py-2 rounded-lg" onClick={handleLinkClick}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-100 ">
            <h2 className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">About Tech Fusion</h2>
            <p><strong className=" bg-gradient-to-r from-blue-400 via-green-400 to-purple-600 bg-clip-text text-transparent">Date of Creation:</strong> [22/11/2024]</p>
            <p><strong className=" bg-gradient-to-r from-blue-400 via-yellow-400 to-purple-600 bg-clip-text text-transparent">Scope:</strong> A technical club aimed at enhancing coding and development skills among students.</p>
            <p><strong className=" bg-gradient-to-r from-blue-400 via-red-400 to-purple-600 bg-clip-text text-transparent">Email:</strong> <a href="mailto:techfusion@example.com" className="text-blue-500 hover:underline"> techfusion@example.com</a></p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all" onClick={() => setShowPopup(false)} >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

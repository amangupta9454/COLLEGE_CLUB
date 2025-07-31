// import { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from "react-responsive-carousel";
// import inauguration from "/src/gallery/inaugration.jpg";
// import inauguration1 from "/src/gallery/inaugration1.jpg";
// import inauguration2 from "/src/gallery/inaugration2.jpg";
// import inauguration3 from "/src/gallery/inaugration3.jpg";
// import inauguration4 from "/src/gallery/inaugration4.jpg";
// import inauguration5 from "/src/gallery/inaugration5.jpg";
// import inauguration6 from "/src/gallery/inaugration6.jpg";
// import inauguration7 from "/src/gallery/inaugration7.jpg";
// import inauguration8 from "/src/gallery/inaugration8.jpg";
// import inauguration9 from "/src/gallery/inaugration9.jpg";
// import inauguration10 from "/src/gallery/inaugration10.jpg";
// import project1 from  "/src/gallery/project1.jpg";
// import project2 from  "/src/gallery/project2.jpg";
// import project3 from  "/src/gallery/project3.jpg";
// import project4 from  "/src/gallery/project4.jpg";
// import project5 from  "/src/gallery/project5.jpg";
// import project6 from  "/src/gallery/project6.jpg";
// import academic1 from "/src/gallery/acedmic1.jpg";
// import academic2 from "/src/gallery/acedmic2.jpg";
// import academic3 from "/src/gallery/acedmic3.jpg";
// import academic4 from "/src/gallery/acedmic4.jpg";
// import academic5 from "/src/gallery/acedmic5.jpg";
// import academic6 from "/src/gallery/acedmic6.jpg";
// import academic7 from "/src/gallery/acedmic7.jpg";
// import academic8 from "/src/gallery/acedmic8.jpg";

// const Gallery = () => {
//   const [carouselImages, setCarouselImages] = useState([]);
//   const [showCarousel, setShowCarousel] = useState(false);

//   const handleImageClick = (images) => {
//     setCarouselImages(images);
//     setShowCarousel(true);
//   };

//   const inaugurationImages = [
//     inauguration,
//     inauguration1,
//     inauguration2,
//     inauguration3,
//     inauguration4,
//     inauguration5,
//     inauguration6,
//     inauguration7,
//     inauguration8,
//     inauguration9,
//     inauguration10,
//   ];

//   const projectExhibitionImages = [
//     project1,
//     project2,
//     project3,
//     project4,
//     project5,
//     project6,
//   ];

//   const academicExcellenceImages = [
//     academic1,
//     academic2,
//     academic3,
//     academic4,
//     academic5,
//     academic6,
//     academic7,
//     academic8,
//   ];

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-gradient-to-r from-gray-800 via-black to-violet-950"
//     >
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 pt-20 underline hover:text-cyan-700">
//           Our Events
//         </h1>
//         <div className="video-container flex justify-center mb-6">
//           <iframe
//             className="rounded-lg shadow-lg"
//             width="80%"
//             height="400"
//             src="https://www.youtube.com/embed/YPDnhOOoj34"
//             title="YouTube video"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>

//         {/* Inauguration Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue-600 underline">
//             Inauguration
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {inaugurationImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden rounded-lg shadow-lg"
//                 onClick={() => handleImageClick(inaugurationImages)}
//               >
//                 <img
//                   src={src}
//                   alt={`Inauguration ${index + 1}`}
//                   className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Project Exhibition Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-white mb-4 hover:text-green-600 underline">
//             Project Exhibition
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {projectExhibitionImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden rounded-lg shadow-lg"
//                 onClick={() => handleImageClick(projectExhibitionImages)}
//               >
//                 <img
//                   src={src}
//                   alt={`Project ${index + 1}`}
//                   className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Academic Excellence Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-white mb-4 hover:text-pink-600 underline">
//             Academic Excellence Award
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {academicExcellenceImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden rounded-lg shadow-lg"
//                 onClick={() => handleImageClick(academicExcellenceImages)}
//               >
//                 <img
//                   src={src}
//                   alt={`Academic ${index + 1}`}
//                   className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Modal */}
//         {showCarousel && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//             <div className="relative w-3/4 h-3/4 bg-white rounded-lg overflow-hidden">
//               <button
//                 className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full z-50"
//                 onClick={() => setShowCarousel(false)}
//                 style={{ fontSize: "1.5rem", lineHeight: "1rem" }}
//               >
//                 ✖
//               </button>
//               <Carousel>
//                 {carouselImages.map((src, index) => (
//                   <div key={index}>
//                     <img src={src} alt={`Carousel Image ${index + 1}`} />
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React from 'react'

const Gallery = () => {
  return (
    <div>Gallery</div>
  )
}

export default Gallery

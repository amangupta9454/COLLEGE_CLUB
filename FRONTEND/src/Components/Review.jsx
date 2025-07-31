// import cheshta from "../assets/cheshta.jpg";
// import aman from "../assets/heroImage.png";
// import sanjeev from "../assets/sanjeev.jpg";
// import himanshu from "../assets/himanshu.jpg";
// import sachin from "../assets/sac.jpg";

// const data = [
//   {
//     name: "Cheshta Sharma",
//     img: cheshta,
//     review:"The song competition was a delightful experience for all. Participants sang with great emotion and skill, creating an atmosphere of harmony and rhythm.",
//     linkedin: "https://www.linkedin.com/in/cheshta-sharma-414446332/",
//   },
//   {
//     name: "Aman Gupta",
//     img: aman,
//     review:"The project exhibition was a remarkable showcase of creativity, innovation, and talent. It provided an excellent platform for students to present their ideas.",
//     linkedin: "https://www.linkedin.com/in/amangupta9454/",
//   },
//   {
//     name: "Sanjeev Kumar",
//     img: sanjeev,
//     review:"The project exhibition was an excellent platform for showcasing innovative ideas. The projects presented by students were both practical and visionary.",
//     linkedin: "https://www.linkedin.com/in/sanjivkumar2006/",
//   },
//   {
//     name: "Himanshu Gupta",
//     img: himanshu,
//     review:"The Robo Race was a thrilling competition that combined technology with excitement. It was fascinating to watch robots maneuver through obstacles.",
//     linkedin: "https://www.linkedin.com/in/himanshu561hi/",
//   },
//   {
//     name: "Sachchidanad Yadav",
//     img: sachin,
//     review: "The event was well-organized and executed, with clear communication and timely management of activities. The seamless flow ensured great engagement.",
//     linkedin: "https://www.linkedin.com/in/sachchidanand-yadav-%E2%9C%85-499852255/",
//   },
// ];
// const Review = () => {
//   return (
//     <div className="absolute min-h-screen py-12 px-4 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-transparent to-pink-900 opacity-50 animate-pulse" />
//         <div className="absolute inset-0 pointer-events-none">
//           {Array.from({ length: 50 }).map((_, index) => (
//             <div key={index} className="absolute w-2 h-2 bg-white rounded-full opacity-25 animate-ping"
//               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`,
//               }}/>
//           ))}
//         </div>
//       </div>
//       <div className="text-center mb-8 animate-pulse relative z-5">
//         <h1 className="text-4xl font-bold text-white py-10 underline hover:text-yellow-300">
//           Students Reviews
//         </h1>
//         <p className="text-lg text-white">
//           See what our students have to say about their experience with us.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full md:w-11/12 lg:w-10/12 relative z-5">
//         {data.map((d, index) => (
//           <div key={index} className="relative bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-transform duration-500 transform hover:scale-105 cursor-pointer group overflow-hidden" >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-gray-900 to-gray-950 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
//             <div className="flex justify-center items-center relative z-10">
//               <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
//                 <img src={d.img}className="border-4 border-black w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-md transform transition-transform group-hover:scale-110"/>
//               </a>
//             </div>
//             <div className="mt-4 text-center relative z-5">
//               <h3 className="text-lg font-semibold text-white">{d.name}</h3>
//               <p className="text-gray-300 mt-2 text-sm">{d.review}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-16 bg-transparent p-8 rounded-lg shadow-lg max-w-4xl mx-auto transform transition-transform hover:scale-110  duration-500 relative z-5">
//         <h2 className="text-2xl font-bold text-center mb-6 text-white underline hover:text-pink-600 cursor-pointer animate-bounce">
//           Submit Your Feedback
//         </h2>
//         <form  action="https://getform.io/f/amddkgwb"  method="POST" className="space-y-4 bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white border-opacity-20">
//   <input type="text" name="name" placeholder="Enter your name" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
//   <input type="text" name="team" placeholder="Enter your team name" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
//   <select name="gender" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
//     <option value="">Select your gender</option>
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//   </select>
//   <select name="branch" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
//     <option value="">Select your Branch</option>
//     <option value="CSE">Computer Science & Engineering</option>
//     <option value="IT">Information Technology</option>
//     <option value="AI">Computer Science & AI & ML</option>
//     <option value="HS">High School Student</option>
//     <option value="IC">Inter College Student</option>
//   </select>
//   <select name="field" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
//     <option value="">Select your field</option>
//     <option value="robo-race">ROBO RACE</option>
//     <option value="project-exhibition">PROJECT EXHIBITION</option>
//     <option value="cultural-event">CULTURAL EVENT</option>
//     <option value="rangoli">RANGOLI COMPETITION</option>
//     <option value="dance">DANCE COMPETITION</option>
//     <option value="code-puzzle">CODE PUZZLE</option>
//     <option value="nukkad-natak">NUKKAD NATAK</option>
//     <option value="singing">SINGING COMPETITION</option>
//     <option value="ad-mad">AD-MAD SHOW</option>
//   </select>
//   <select name="college" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full">
//     <option value="" disabled selected>Select your college or school</option>
//     <option value="abes-engineering-college">ABES Engineering College</option>
//     <option value="krishna-engineering-college">Krishna Institute of Engineering College (KIET)</option>
//     <option value="ajay-kumar-garg-engineering-college">Ajay Kumar Garg Engineering College (AKGEC)</option>
//     <option value="imt-ghaziabad">Institute of Management Technology (IMT) Ghaziabad</option>
//     <option value="hiet-ghaziabad">Hi-Tech Institute of Engineering and Technology (HIET)</option>
//     <option value="ims-engineering-college">IMS Engineering College</option>
//     <option value="rd">RD Engineering College</option>
//     <option value="sunder">Sunder Deep Engineering College</option>
//     <option value="rkgit">Raj Kumar Goel Institute of Technology</option>
//     <option value="hr-ghaziabad">HR Institute of Engineering and Technology (HIET)</option>
//     <option value="dps-ghaziabad">Delhi Public School (DPS), Ghaziabad</option>
//     <option value="st-marys-school">St. Marys Convent School</option>
//     <option value="sanjay-gandhi-school">Sanjay Gandhi Memorial Public School</option>
//     <option value="kendriya-vidyalaya-ghaziabad">Kendriya Vidyalaya, Ghaziabad</option>
//     <option value="modern-school-ghaziabad">Modern School, Ghaziabad</option>
//     <option value="neptune-college-of-engineering">Neptune College of Engineering</option>
//     <option value="rawal-international-school">Rawal International School</option>
//     <option value="ghaziabad-public-school">Ghaziabad Public School</option>
//   </select>
//   <input type="tel" name="mobile" placeholder="Enter your mobile number" required pattern="[0-9]{10}" maxLength="10" className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
//   <input type="email" name="email" placeholder="Enter your email ID" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
//   <textarea name="message" placeholder="Enter your feedback" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"></textarea>
//   <button type="submit" className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 w-full">
//     Submit Feedback
//   </button>
// </form>

//       </div>
//     </div>
//   );
// };

// export default Review;
import React from 'react'

const Review = () => {
  return (
    <div>Review</div>
  )
}

export default Review

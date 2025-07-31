import React, { useEffect, useRef, useState } from "react";
import { FaYoutube, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp, FaCode, FaRocket, FaBolt } from 'react-icons/fa';
import Typed from "typed.js";
import logo from "../assets/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import harishImage from "../assets/harish.jpg";
import shauryaImage from "../assets/shauryasingh.jpg";
import alishImage from "../assets/AlishSirohi.jpg";
import aadeshImage from "../assets/Aadesh.jpg";
import sahilKumarImage from "../assets/Sahilkumar.jpg";
import sahilVermaImage from "../assets/sahilverma.jpg";
import tanuImage from "../assets/tanu.jpg";
import hietlogo from "../assets/hietlogo.png";

const Home = () => {
  const typedRef = useRef(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  // const [cursorVariant, setCursorVariant] = useState("default");
  const [hoveredLetter, setHoveredLetter] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(-1);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Code. Create. Conquer.",
        "Building Tomorrow's Tech Leaders",
        "Where Innovation Meets Excellence",
        "Transforming Ideas Into Reality"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '▋',
    });
    return () => typed.destroy();
  }, []);

  const teamMembers = [
    { 
      id: 1, 
      name: "Hareesh Jaiveer Singh", 
      designation: "Core Member", 
      image: harishImage, 
      linkedin: "https://www.linkedin.com/in/hareesh-jaiveer-singh-317aa4328/",
      specialty: "Full Stack Developer"
    },
    { 
      id: 2, 
      name: "Shaurya Singh", 
      designation: "Secretary", 
      image: shauryaImage, 
      linkedin: "https://www.linkedin.com/in/shaurya-singh-9a13b9277",
      specialty: "UI/UX Designer"
    },
    { 
      id: 3, 
      name: "Alish Sirohi", 
      designation: "Vice President", 
      image: alishImage, 
      linkedin: "https://www.linkedin.com/in/alish-sirohi-5a591b299",
      specialty: "AI/ML Engineer"
    },
    { 
      id: 4, 
      name: "Aadesh Kumar", 
      designation: "Core Member", 
      image: aadeshImage, 
      linkedin: "https://www.linkedin.com/in/aadesh-kumar-60a311304",
      specialty: "Backend Developer"
    },
    { 
      id: 5, 
      name: "Sahil Kumar", 
      designation: "Core Member", 
      image: sahilKumarImage, 
      linkedin: "https://www.linkedin.com/in/sahil-kumar-a93439301",
      specialty: "Mobile Developer"
    },
    { 
      id: 6, 
      name: "Sahil Verma", 
      designation: "President", 
      image: sahilVermaImage, 
      linkedin: "https://www.linkedin.com/in/sahil-verma-957528310",
      specialty: "DevOps Engineer"
    },
    { 
      id: 7, 
      name: "Tanu Jha", 
      designation: "Core Member", 
      image: tanuImage, 
      linkedin: "https://www.linkedin.com/in/tanu-jha-78029a347",
      specialty: "Data Scientist"
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const techSkills = [
    { 
      title: 'Web Development', 
      description: 'Master modern web technologies including React, Next.js, Node.js, and cloud deployment.',
      icon: '🌐',
      gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
      borderGradient: 'from-emerald-400 to-cyan-400',
      delay: '0ms'
    },
    { 
      title: 'Mobile Development', 
      description: 'Build cross-platform mobile apps using React Native, Flutter, and native iOS/Android.',
      icon: '📱',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      borderGradient: 'from-purple-400 to-pink-400',
      delay: '100ms'
    },
    { 
      title: 'AI & Machine Learning', 
      description: 'Explore artificial intelligence, deep learning, computer vision, and data science.',
      icon: '🤖',
      gradient: 'from-orange-500 via-yellow-500 to-amber-500',
      borderGradient: 'from-orange-400 to-yellow-400',
      delay: '200ms'
    },
    { 
      title: 'Blockchain & Web3', 
      description: 'Dive into decentralized applications, smart contracts, and cryptocurrency development.',
      icon: '⛓️',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      borderGradient: 'from-indigo-400 to-blue-400',
      delay: '300ms'
    },
    { 
      title: 'Cloud & DevOps', 
      description: 'Master cloud platforms, containerization, CI/CD pipelines, and infrastructure automation.',
      icon: '☁️',
      gradient: 'from-teal-500 via-green-500 to-emerald-500',
      borderGradient: 'from-teal-400 to-green-400',
      delay: '400ms'
    },
    { 
      title: 'Cybersecurity', 
      description: 'Learn ethical hacking, penetration testing, network security, and digital forensics.',
      icon: '🔒',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      borderGradient: 'from-red-400 to-orange-400',
      delay: '500ms'
    }
  ];

  const faqData = [
    {
      question: "What is Tech Fusion?",
      answer: "Tech Fusion is an elite student-driven technical society dedicated to advancing cutting-edge technology education through immersive projects, industry-standard workshops, competitive programming, and innovation challenges."
    },
    {
      question: "How can I join Tech Fusion?",
      answer: "Join through our rigorous selection process: Apply via our online portal, participate in technical assessments, showcase your projects, and demonstrate passion for technology innovation."
    },
    {
      question: "What are the membership benefits?",
      answer: "Exclusive access to industry mentors, premium development tools, certification programs, internship opportunities, hackathon sponsorships, and direct placement assistance from our partner companies."
    },
    {
      question: "Who is eligible to join?",
      answer: "Students from 2nd year onwards in CSE, IT, AI/ML, or related technical branches with demonstrated coding skills, project experience, or exceptional enthusiasm for technology innovation."
    },
    {
      question: "What makes Tech Fusion unique?",
      answer: "Our industry partnerships, cutting-edge project labs, international competition participation, startup incubation support, and track record of producing successful tech entrepreneurs and industry leaders."
    }
  ];

  const renderAnimatedText = (text, baseClass, startIndex = 0) => {
    return text.split('').map((letter, index) => {
      const globalIndex = startIndex + index;
      return (
        <span
          key={globalIndex}
          className={`${baseClass} transition-all duration-300 cursor-default inline-block ${
            hoveredLetter === globalIndex ? 'text-white drop-shadow-2xl scale-110' : ''
          }`}
          onMouseEnter={() => setHoveredLetter(globalIndex)}
          onMouseLeave={() => setHoveredLetter(-1)}
          style={{ 
            transform: hoveredLetter === globalIndex ? 'translateY(-5px)' : 'translateY(0px)'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      );
    });
  };

  return (
    <>

      <div className="min-h-screen  bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white overflow-x-hidden relative selection:bg-cyan-500/20">
        
        {/* Hero Section Rain Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/98 via-gray-900/95 to-black/98"></div>
          
          {/* Hero Rain Particles */}
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`hero-rain-${i}`}
              className="absolute w-0.5 h-2 bg-gradient-to-b from-cyan-400/60 to-transparent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                animationName: 'rainFall',
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            />
          ))}

          {/* Floating Code Elements */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-cyan-400/20 font-mono text-sm select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `codeFloat ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              {['</>', '{}', '[]', '()', '<html>', 'AI', 'ML', 'API', 'CSS', 'JS', 'React', 'Node'][Math.floor(Math.random() * 12)]}
            </div>
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'gridMove 25s linear infinite'
            }}></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[30vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/60"></div>
          
          <div className="relative z-0 max-w-6xl mx-auto text-center space-y-8 lg:space-y-12 pt-24">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/40 backdrop-blur-md">
                  <FaBolt className="text-yellow-400 text-sm animate-pulse" />
                  <span className="text-sm font-bold text-cyan-300 tracking-wider">TECH FUSION 2025</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                  <div className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-2xl mb-4">
                    {renderAnimatedText("WELCOME TO", "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600", 0)}
                  </div>
                  <div className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-2xl">
                    {renderAnimatedText("TECH FUSION", "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500", 11)}
                  </div>
                </h1>
              </div>
              
              <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center">
                <p 
                  ref={typedRef} 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-[50px] drop-shadow-lg"
                />
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-medium">
                Elite technical society fostering <span className="text-cyan-400 font-bold">innovation</span>, 
                building <span className="text-purple-400 font-bold">future leaders</span>, and 
                creating <span className="text-emerald-400 font-bold">tech excellence</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center p-8">
              <button 
                className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl font-bold text-lg sm:text-xl lg:text-2xl overflow-hidden transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 border-2 border-cyan-400/60 hover:border-cyan-300"
                // onMouseEnter={() => setCursorVariant('hover')}
                // onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="relative z-0 flex items-center gap-3">
                  <FaRocket className="text-xl lg:text-2xl" />
                  Join the Revolution
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              
            </div>
          </div>
        </section>

        {/* Team Section with Enhanced Spacing and Particles */}
        <section className="relative py-32 sm:py-36 lg:py-40 px-4 sm:px-6 lg:px-8 mt-16">
          {/* Team Section Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-gray-900/90 to-black/95"></div>
            
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={`team-rain-${i}`}
                className="absolute w-0.5 h-3 bg-gradient-to-b from-purple-400/40 to-transparent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationName: 'diagonalRain',
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear'
                }}
              />
            ))}
          </div>
          
          <div className="relative z-0 max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/40 backdrop-blur-md">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-purple-300 tracking-wider">OUR ELITE TEAM</span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-2xl">
                  Tech Leaders &
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-2xl">
                  Innovators
                </span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <Slider {...sliderSettings}>
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="px-2 sm:px-4 lg:px-6">
                    <div 
                      className="group relative bg-gradient-to-br from-gray-950/95 via-slate-900/95 to-gray-950/95 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-8 sm:p-10 text-center transform transition-all duration-1000 hover:scale-105 hover:border-cyan-400/80 hover:shadow-2xl hover:shadow-cyan-500/30  mx-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                      
                    >
                      {/* Enhanced Background Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      <div className="relative">
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 mx-auto mb-10 sm:mb-10 rounded-2xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-0 transform transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3">
                          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-700 drop-shadow-lg">
                            {member.name}
                          </h3>
                          
                          <div className="space-y-1 sm:space-y-2">
                            <p className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                              {member.designation}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                              {member.specialty}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6 sm:mt-8">
                          <a 
                            href={member.linkedin}
                            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-white text-sm sm:text-base transform transition-all duration-700 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 border border-blue-400/40 hover:border-purple-400/60"
                          >
                            <FaLinkedin className="text-sm sm:text-lg" />
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* Enhanced What We Do Section */}
        <section id="discover" className="relative py-14 sm:py-14 lg:py-14 px-4 sm:px-6 lg:px-8">
          {/* Skills Section Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-slate-950/90 to-gray-900/95"></div>
            
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={`skills-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: `linear-gradient(45deg, #00f5ff, #ff00ff, #00ff41, #ff6b35)`,
                  animation: `skillsFloat ${8 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 8}s`,
                  filter: 'blur(1px)',
                  opacity: 0.6
                }}
              />
            ))}
          </div>
          
          <div className="relative z-0 max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-500/40 backdrop-blur-md">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-emerald-300 tracking-wider">CUTTING-EDGE DOMAINS</span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 drop-shadow-2xl">
                  Technology
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-2xl">
                  Mastery
                </span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 mx-auto rounded-full"></div>
              
              <p className="text-xl lg:text-2xl text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Master the technologies shaping tomorrow's digital landscape through hands-on projects and industry mentorship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {techSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-950/98 via-slate-900/98 to-gray-950/98 backdrop-blur-xl border border-gray-800/40 rounded-3xl p-8 lg:p-10 text-center transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-4 overflow-hidden"
                  style={{ 
                    animationDelay: skill.delay,
                    animation: 'slideUp 1s ease-out forwards'
                  }}
                  onMouseEnter={() => {
                    // setCursorVariant('hover');
                    setHoveredCard(index);
                  }}
                  onMouseLeave={() => {
                    // setCursorVariant('default');
                    setHoveredCard(-1);
                  }}
                >
                  {/* Running Border Animation */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-spin-slow`} style={{ padding: '1px' }}>
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-950/98 via-slate-900/98 to-gray-950/98"></div>
                  </div>
                  
                  {/* Cursor Fill Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-all duration-1000 ${hoveredCard === index ? 'animate-pulse' : ''}`}></div>
                  
                  {/* Running Light Border */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.borderGradient} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-1000 animate-border-run`}></div>
                  </div>
                  
                  <div className="relative z-0">
                    <div className="text-5xl lg:text-6xl mb-6 transform transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg">
                      {skill.icon}
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-700 drop-shadow-lg">
                      {skill.title}
                    </h3>
                    
                    <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-700 leading-relaxed font-medium">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          {/* FAQ Section Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-slate-950/90 to-black/95"></div>
            
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={`faq-spark-${i}`}
                className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `sparkle ${4 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-0 max-w-5xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/40 backdrop-blur-md">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-orange-300 tracking-wider">FREQUENTLY ASKED</span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 drop-shadow-2xl">
                  Questions
                </span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-950/95 via-slate-900/95 to-gray-950/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden hover:border-orange-400/60 transition-all duration-700 hover:shadow-xl hover:shadow-orange-500/20"
                  // onMouseEnter={() => setCursorVariant('hover')}
                  // onMouseLeave={() => setCursorVariant('default')}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-8 list-none transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-500/5 group-hover:to-red-500/5">
                    <span className="text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-500 drop-shadow-lg pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center transform transition-all duration-500 group-open:rotate-45 group-hover:scale-110">
                        <span className="text-white text-xl font-bold">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-gray-300 leading-relaxed border-l-4 border-orange-400/50 ml-8 bg-gradient-to-r from-orange-500/5 to-transparent">
                    <p className="text-base lg:text-lg font-medium">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-slate-900 to-black border-t border-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-purple-900/5 to-pink-900/5"></div>
          
          <div className="relative z-0 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <img 
                    src={logo} 
                    alt="Tech Fusion" 
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    TECH FUSION
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-md">
                  Elite technical society pioneering innovation, fostering excellence, and building tomorrow's tech leaders through cutting-edge education and industry partnerships.
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex gap-4">
                  {[
                    { icon: FaYoutube, href: "https://www.youtube.com/@HiTechCollege", color: "hover:text-red-500 hover:shadow-red-500/30" },
                    { icon: FaWhatsapp, href: "https://wa.me/9651585712", color: "hover:text-green-500 hover:shadow-green-500/30" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/amangupta9454", color: "hover:text-blue-500 hover:shadow-blue-500/30" },
                    { icon: FaInstagram, href: "https://www.instagram.com/gupta_aman_9161", color: "hover:text-pink-500 hover:shadow-pink-500/30" },
                    { icon: FaEnvelope, href: "mailto:ag0567688@gmail.com", color: "hover:text-yellow-500 hover:shadow-yellow-500/30" }
                  // eslint-disable-next-line no-unused-vars
                  ].map(({ icon: IconComponent, href, color }, index) => (
                    <a 
                      key={index}
                      href={href}
                      className={`w-14 h-14 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-full flex items-center justify-center text-gray-400 ${color} transition-all duration-500 transform hover:scale-110 hover:shadow-xl border border-gray-600/50 hover:border-current backdrop-blur-sm`}
                      
                    >
                      <IconComponent size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {['Home', 'About Us', 'Projects', 'Events', 'Contact'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-emerald-400 transition-all duration-500 text-lg hover:underline font-medium transform hover:translate-x-2 inline-block group"
                        
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gray-800/90 border border-gray-700/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/50">
          <h4 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-4 tracking-tight">Join Us</h4>
          <p className="text-sm sm:text-base font-light text-gray-300 mb-4">Join our Technical Club to explore hands-on projects, participate in workshops, build your network, and grow your skills in Web Development, AI/ML, IoT, and more. Let's innovate and lead together!</p>
          
        </div>
            </div>

            {/* Institution Section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-gray-800/50 border-b mb-8">
              <div className="flex items-center gap-6 mb-6 md:mb-0">
                <a 
                  href="https://www.hiet.org" 
                  className="group"
                  // onMouseEnter={() => setCursorVariant('hover')}
                  // onMouseLeave={() => setCursorVariant('default')}
                >
                  <img 
                    src={hietlogo} 
                    alt="HIET Logo"
                    className="w-24 h-24 object-contain bg-white/90 rounded-2xl p-3 hover:bg-gradient-to-br hover:from-cyan-800/80 hover:to-purple-800/80 hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 border-2 border-gray-600/50 hover:border-cyan-400/50 backdrop-blur-sm"
                  />
                </a>
                <div>
                  <h5 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    HIET Ghaziabad
                  </h5>
                  <p className="text-gray-400 font-medium">Premier Technical Club</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 font-bold text-lg">Established 2024</p>
                <p className="text-cyan-400 font-medium">Building Future Tech Leaders</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-gray-400 font-medium text-lg">
                  Crafted with ❤️ by{' '}
                  <a 
                    href="https://guptaaman.netlify.app/"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-400 hover:to-pink-500 transition-all duration-500 font-bold hover:underline"
                    // onMouseEnter={() => setCursorVariant('hover')}
                    // onMouseLeave={() => setCursorVariant('default')}
                  >
                    Aman Gupta
                  </a>
                </p>
                
                <div className="flex items-center gap-6">
                  <span className="text-cyan-400 font-bold text-lg">Version 2.0</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-purple-400 font-medium">Last Updated: Aug 01, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/40 transition-all duration-700 hover:scale-110 z-50 border-2 border-cyan-400/50 hover:border-purple-400/50 backdrop-blur-sm group"
            // onMouseEnter={() => setCursorVariant('hover')}
            // onMouseLeave={() => setCursorVariant('default')}
          >
            <FaArrowUp size={18} className="mx-auto transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </footer>

        {/* Enhanced Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-6">
            <div className="bg-gradient-to-br from-gray-950/95 via-slate-900/95 to-gray-950/95 backdrop-blur-xl border-2 border-cyan-400/50 rounded-3xl p-12 max-w-2xl w-full text-center transform transition-all duration-1000 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              <div className="relative">
                <div className="mb-8">
                  <img 
                    src={logo} 
                    alt="Tech Fusion" 
                    className="w-24 h-24 mx-auto mb-6 object-contain"
                  />
                  <h3 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">
                    About Tech Fusion
                  </h3>
                </div>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                  Tech Fusion is an elite student-driven technical society dedicated to advancing cutting-edge technology education through immersive projects, industry-standard workshops, competitive programming, and innovation challenges. We foster excellence and build tomorrow's tech leaders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-purple-600 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 border-2 border-purple-400/50 hover:border-pink-400/50"
                    // onMouseEnter={() => setCursorVariant('hover')}
                    // onMouseLeave={() => setCursorVariant('default')}
                  >
                    Close
                  </button>
                  
                  <button 
                    className="px-8 py-4 bg-transparent border-2 border-cyan-400/50 rounded-2xl font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-purple-600/20 transition-all duration-700 hover:scale-105 hover:border-cyan-300"
                    // onMouseEnter={() => setCursorVariant('hover')}
                    // onMouseLeave={() => setCursorVariant('default')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) translateX(10px); opacity: 0; }
        }

        @keyframes diagonalRain {
          0% { transform: translateY(-100vh) translateX(-20px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) translateX(20px); opacity: 0; }
        }

        @keyframes codeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-30px) rotate(5deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(-3deg); opacity: 0.4; }
          75% { transform: translateY(-25px) rotate(2deg); opacity: 0.7; }
        }

        @keyframes skillsFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
          25% { transform: translateY(-40px) translateX(20px) scale(1.2); opacity: 0.8; }
          50% { transform: translateY(-20px) translateX(-15px) scale(0.8); opacity: 0.3; }
          75% { transform: translateY(-35px) translateX(10px) scale(1.1); opacity: 0.9; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes border-run {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-border-run {
          animation: border-run 3s linear infinite;
        }

        details[open] summary ~ * {
          animation: slideDown 0.7s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }

        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }

        /* Custom selection */
        ::selection {
          background: rgba(6, 182, 212, 0.4);
          color: white;
        }

        /* Hide slider arrows on mobile */
        @media (max-width: 768px) {
          .slick-prev, .slick-next {
            display: none !important;
          }
        }

        /* Responsive slider dots */
        .slick-dots {
          bottom: -50px !important;
        }

        .slick-dots li button:before {
          color: #06b6d4 !important;
          font-size: 12px !important;
        }

        .slick-dots li.slick-active button:before {
          color: #8b5cf6 !important;
        }
      `}</style>
    </>
  );
};

export default Home;

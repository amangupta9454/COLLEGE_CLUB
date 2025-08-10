import React, { useState, useEffect } from 'react';
import crossroads from '/crossroads.jpg';
import hackathon from '/hackathon.jpg';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const events = [
    {
      id: 1,
      name: 'Code Arambh',
      image: hackathon,
      description: 'A district-level 24-hour hackathon for college students, with over 100 teams showcasing innovative solutions.',
      visitLink: 'https://hiet.org/codearambh/',
      date: 'April 11-12 2026',
      organization: 'Tech Fusion Club',
      participants: '100+ teams',
      scope: 'District Level',
      vision: 'To foster creativity and problem-solving through coding.'
    },
    {
      id: 2,
      name: 'Crossroad 2025',
      image: crossroads,
      description: 'An annual tech fest where students from various colleges display their skills and unique ideas.',
      visitLink: 'https://hiet-crossroad.netlify.app/',
      date: 'November 12-13, 2025',
      organization: 'Tech Fusion Club',
      participants: '200+ students and teams',
      scope: 'District Level',
      vision: 'To promote innovation and collaboration among students.'
    },
    {
      id: 3,
      name: 'Gambed Quiz',
      image: 'https://via.placeholder.com/400x200?text=Gambed+Quiz',
      description: 'An exciting quiz competition for our college students, testing knowledge and quick thinking.',
      visitLink: 'https://hiet.org/',
      date: 'October 2025',
      organization: 'Tech Fusion Club',
      participants: '200+ students',
      scope: 'College Level',
      vision: 'To encourage intellectual growth and competitive spirit.'
    },
  ];

  const openPopup = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                        0 0 40px rgba(255, 255, 255, 0.05);
          }
          50% { 
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
                        0 0 60px rgba(255, 255, 255, 0.1);
          }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3); }
        }
        
        @keyframes card-entrance {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes modal-scale {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.7),
            0 0 50px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .title-glow {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #d1d5db 25%,
            #9ca3af 50%,
            #6b7280 75%,
            #ffffff 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .btn-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .btn-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-hover:hover::before {
          left: 100%;
        }
        
        .btn-hover:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
          animation: particle-float linear infinite;
          pointer-events: none;
        }
        
        .card-entrance {
          animation: card-entrance 0.8s ease-out forwards;
        }
        
        .modal-entrance {
          animation: modal-scale 0.5s cubic-bezier(0.23, 1, 0.320, 1) forwards;
        }
        
        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.1s ease;
        }
        
        .image-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
          transition: all 0.5s ease;
        }
        
        .image-overlay:hover {
          background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(255,255,255,0.1));
        }
      `}</style>
      
      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
      ></div>
      
      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-orb"
          style={{
            left: Math.random() * 100 + '%',
            width: Math.random() * 15 + 8 + 'px',
            height: Math.random() * 15 + 8 + 'px',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: (Math.random() * 15 + 10) + 's',
          }}
        ></div>
      ))}
      
      <div className="relative z-0 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className={`text-center mb-16 sm:mb-20 lg:mb-24 ${isLoaded ? 'card-entrance' : ''}`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8  leading-tight tracking-tight">
            EPIC EVENTS
          </h1>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto font-light leading-relaxed px-4">
            Discover extraordinary experiences that push the boundaries of innovation ✨
          </p>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 transform ${isLoaded ? 'card-entrance' : ''}`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden group h-48 sm:h-56 md:h-64 lg:h-72">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="image-overlay absolute inset-0"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/20">
                  <span className="text-xs sm:text-sm font-bold text-white">{event.scope}</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-400"></div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-white leading-tight">
                  {event.name}
                </h2>
                
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {event.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={event.visitLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-center font-bold btn-hover transition-all duration-300"
                  >
                    🚀 Launch
                  </a>
                  <button 
                    onClick={() => openPopup(event)} 
                    className="flex-1 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold btn-hover hover:bg-white/20 transition-all duration-300"
                  >
                    ✨ Discover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Responsive Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-sm sm:max-w-md lg:max-w-2xl w-full relative modal-entrance overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closePopup} 
              className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-2xl z-10"
            >
              ×
            </button>
            
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {selectedEvent.name}
              </h2>
              <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-2 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-300 text-base sm:text-lg italic px-2">"{selectedEvent.vision}"</p>
            </div>
            
            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 mb-8 sm:mb-10">
              {[
                { label: 'Event Date', value: selectedEvent.date, icon: '🗓️' },
                { label: 'Organization', value: selectedEvent.organization, icon: '🏢' },
                { label: 'Participants', value: selectedEvent.participants, icon: '👥' },
                { label: 'Event Scope', value: selectedEvent.scope, icon: '🌍' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="flex items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-lg sm:text-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-400 text-xs sm:text-sm block font-medium">{item.label}</span>
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg truncate block">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action Button */}
            <div className="text-center relative z-10">
              <a
                href={selectedEvent.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg btn-hover transition-all duration-300 hover:scale-105"
              >
                🎯 Visit Event Page
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
import React, { useState, useEffect } from 'react';
import crossroads from '/crossroads.jpg';
import hackathon from '/hackathon.jpg';
import Gambed from '/gambed.jpeg';
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
      description:
        'A district-level 24-hour hackathon for college students, with over 100 teams showcasing innovative solutions.',
      visitLink: 'https://hiet.org/codearambh/',
      date: 'April 11-12 2026',
      organization: 'Tech Fusion Club',
      participants: '100+ teams',
      scope: 'District Level',
      vision: 'To foster creativity and problem-solving through coding.',
    },
    {
      id: 2,
      name: 'Crossroad 2025',
      image: crossroads,
      description:
        'An annual tech fest where students from various colleges display their skills and unique ideas.',
      visitLink: 'https://hiet-crossroad.netlify.app/',
      date: 'November 12-13, 2025',
      organization: 'Tech Fusion Club',
      participants: '200+ students and teams',
      scope: 'District Level',
      vision: 'To promote innovation and collaboration among students.',
    },
    {
      id: 3,
      name: 'Gambed Quiz',
      image: Gambed,
      description:
        'An exciting quiz competition for our college students, testing knowledge and quick thinking.',
      visitLink: 'https://hiet.org/',
      date: 'October 2025',
      organization: 'Tech Fusion Club',
      participants: '200+ students',
      scope: 'College Level',
      vision: 'To encourage intellectual growth and competitive spirit.',
    },
  ];

  const openPopup = (event) => setSelectedEvent(event);
  const closePopup = () => setSelectedEvent(null);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        /* ---------- Background Star-Field ---------- */
        .star-field {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
          overflow: hidden;
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: #fff;
          animation: twinkle 10s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* ---------- Neon Particles ---------- */
        @keyframes particle-float {
          0%   { transform: translateY(100vh) rotate(0deg) scale(0.3); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg) scale(1.6); opacity: 0; }
        }
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(0.5px);
        }

        /* ---------- Glassmorphism Card ---------- */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-10px) scale(1.02);
          box-shadow:
            0 35px 70px rgba(0, 0, 0, 0.7),
            0 0 60px rgba(0, 255, 255, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        /* ---------- Entrance Animations ---------- */
        @keyframes card-entrance {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes modal-scale {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .card-entrance { animation: card-entrance 0.8s ease-out forwards; }
        .modal-entrance { animation: modal-scale 0.5s cubic-bezier(0.23, 1, 0.320, 1) forwards; }

        /* ---------- Cursor Glow ---------- */
        .cursor-glow {
          position: fixed;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.05), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
          transition: transform 0.08s ease;
        }

        /* ---------- Buttons ---------- */
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
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }
        .btn-hover:hover::before { left: 100%; }
        .btn-hover:hover { transform: translateY(-2px) scale(1.02); }
      `}</style>

      {/* ---------- Star-Field Background ---------- */}
      <div className="star-field">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ---------- Cursor Glow ---------- */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 125,
          top: mousePosition.y - 125,
        }}
      />

      {/* ---------- Neon Particles ---------- */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="floating-orb"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            background: `radial-gradient(circle, hsla(${180 + i * 15}, 100%, 70%, 0.7), transparent 70%)`,
            boxShadow: `0 0 12px hsla(${180 + i * 15}, 100%, 70%, 0.6),
                        0 0 24px hsla(${180 + i * 15}, 100%, 70%, 0.4)`,
            animation: `particle-float ${12 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* ---------- Content ---------- */}
      <div className="relative z-0 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24">
        {/* Hero */}
        <div
          className={`text-center mb-16 sm:mb-20 lg:mb-24 ${isLoaded ? 'card-entrance' : ''}`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
              EPIC EVENTS
            </span>
          </h1>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary experiences that push the boundaries of innovation ✨
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden ${isLoaded ? 'card-entrance' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-white border border-white/20">
                  {event.scope}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white">{event.name}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{event.description}</p>

                <div className="flex gap-3">
                  <a
                    href={event.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-xl text-center font-bold btn-hover"
                  >
                    🚀 Launch
                  </a>
                  <button
                    onClick={() => openPopup(event)}
                    className="flex-1 border border-white/30 hover:border-white/60 text-white px-4 py-2 rounded-xl font-bold btn-hover hover:bg-white/10"
                  >
                    ✨ Discover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Modal ---------- */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-entrance"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl transition"
            >
              ×
            </button>

            <h2 className="text-3xl sm:text-4xl font-black mb-2 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              {selectedEvent.name}
            </h2>
            <p className="text-center text-gray-300 mb-6 italic">"{selectedEvent.vision}"</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: '🗓️ Date', value: selectedEvent.date },
                { label: '🏢 Org', value: selectedEvent.organization },
                { label: '👥 Participants', value: selectedEvent.participants },
                { label: '🌍 Scope', value: selectedEvent.scope },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href={selectedEvent.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-center px-6 py-3 rounded-xl font-bold btn-hover"
            >
              🎯 Visit Event Page
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
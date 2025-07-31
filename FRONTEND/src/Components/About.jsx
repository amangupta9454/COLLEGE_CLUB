import HeroImage from "../assets/ourachiever.jpg";
import AchieverImage from "../assets/logo.png";
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ["#00f6ff", "#ff00ff", "#ffffff"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: 2.5,
        random: true,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.5,
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  };

  // Animation controls for About section
  const aboutControls = useAnimation();
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation controls for Achiever section
  const achieverControls = useAnimation();
  const [achieverRef, achieverInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation variants for text and image
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Trigger animations when sections come into view
  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutControls, aboutInView]);

  useEffect(() => {
    if (achieverInView) {
      achieverControls.start("visible");
    } else {
      achieverControls.start("hidden");
    }
  }, [achieverControls, achieverInView]);

  // Trigger About section animation on mount (for refresh)
  useEffect(() => {
    aboutControls.start("visible");
  }, [aboutControls]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen overflow-hidden">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div name="about" ref={aboutRef} className="w-full text-white py-20 relative z-0">
        <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full">
          <div className="flex justify-center pb-12 pt-16">
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold inline border-b-4 border-cyan-500 transition-all duration-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/40"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Tech Fusion
            </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12 lg:gap-16">
            <motion.div
              className="w-full lg:w-1/2 bg-gray-900/60 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20"
              variants={textVariants}
              initial="hidden"
              animate={aboutControls}
            >
              <h5 className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed text-justify">
                <span className="text-cyan-400 text-2xl md:text-3xl font-semibold">Tech Fusion</span> is a dynamic platform uniting faculty and students to foster a thriving ecosystem of innovation and technical excellence. Founded in 2024, our mission is to bridge academic learning with real-world applications, empowering students to master cutting-edge technologies. We offer hands-on workshops, competitive hackathons, and collaborative projects in AI, robotics, web development, cybersecurity, and IoT.
              </h5>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={aboutControls}
            >
              <img
                src={AchieverImage}
                alt="Tech Fusion Logo"
                className="rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div name="achiever" ref={achieverRef} className="w-full text-white py-20 relative z-0">
        <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full">
          <div className="flex justify-center pb-12">
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold inline border-b-4 border-cyan-500 transition-all duration-300 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/40"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Achiever
            </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full gap-8 md:gap-12 lg:gap-16">
            <motion.div
              className="w-full lg:w-1/2 bg-gray-900/60 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20"
              variants={textVariants}
              initial="hidden"
              animate={achieverControls}
            >
              <h5 className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed text-justify">
                One of our exceptional B.Tech 4th-year students recently achieved a remarkable milestone by <span className="text-yellow-400 text-xl md:text-2xl font-semibold transition-all duration-300 hover:text-cyan-300 hover:animate-pulse">winning the prestigious Hackathon at Innovortex 2.0, held at Microsoft Office, Gurgaon</span>. Competing against top talent from across India, their innovative solution in AI-driven sustainability impressed judges, securing the top spot in this highly competitive event. This achievement reflects their dedication, technical expertise, and the high-quality mentorship provided at Tech Fusion.
              </h5>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={achieverControls}
            >
              <img
                src={HeroImage}
                alt="Achiever"
                className="rounded-3xl w-lg h-lg md:w-96 md:h-96 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
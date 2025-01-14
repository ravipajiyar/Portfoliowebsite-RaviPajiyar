import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ravi_pajiyar from '../assets/ravipjnew_resume.pdf';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const handleHireMeClick = () => {
        const hireMeSection = document.getElementById('hireme');
        if (hireMeSection) {
            hireMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // State for managing current slide group
    const [currentCardGroup, setCurrentCardGroup] = useState(0);
    
    // Split services into initial and remaining cards
    const initialServices = services.slice(0, 4);
    const remainingServices = services.slice(4);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (remainingServices.length > 0) {
                setCurrentCardGroup(prev => prev === 0 ? 1 : 0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [remainingServices.length]);

    // Handle dot navigation click
    const handleDotClick = (index) => {
        setCurrentCardGroup(index);
    };

    return (
        <>
            {/* Section Header */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            {/* Main Content */}
            <div className="mt-4 flex xl:flex-row flex-col justify-between gap-8">
                {/* Left Content */}
                <div className="flex flex-col w-full xl:w-[50%]">
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="text-secondary text-[17px] leading-[30px]"
                    >
                        I am a final-year Computer Engineering student passionate about
                        building innovative digital solutions. With expertise in full-stack
                        development, I combine technical prowess with creative problem-solving
                        to create impactful applications.
                        <br/> <br/>
                        My journey in technology spans web development, mobile applications, and artificial intelligence. I'm particularly interested in
                        leveraging AI and machine learning to solve real-world challenges.
                    </motion.p>

                    {/* Buttons */}
                    <div className="mt-20 flex justify-start gap-8">
                        <motion.a
                            href={ravi_pajiyar}
                            download
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#915EFF] text-white py-3 px-6 rounded-md shadow-md text-lg font-bold hover:bg-[#7d4fe3] transition"
                        >
                            Download Resume
                        </motion.a>
                        <motion.button
                            onClick={handleHireMeClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-green-500 text-white py-3 px-6 rounded-md shadow-md text-lg font-bold hover:bg-green-400 transition"
                        >
                            <Link to="/hireme" style={{color:"white"}}>
                                Hire Me
                            </Link>
                        </motion.button>
                    </div>
                </div>

                {/* Education and Core Competencies */}
                <div className="flex flex-col gap-4 w-full xl:w-[48%]">
                    <motion.div
                        variants={fadeIn("up", "spring", 0.5, 0.75)}
                        className="bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl w-full"
                    >
                        <h3 className="text-white text-[24px] font-bold mb-4">Education</h3>
                        <div className="text-secondary text-[16px]">
                            <p><span className="text-white font-bold">Kathmandu University</span></p>
                            <p>Bachelor in Computer Engineering</p>
                            <p>2020 - 2024</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "spring", 0.5, 0.75)}
                        className="bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl w-full"
                    >
                        <h3 className="text-white text-[24px] font-bold mb-4">Core Competencies</h3>
                        <ul className="list-disc text-secondary text-[16px] pl-5">
                            <li>Full Stack Development</li>
                            <li>AI & Machine Learning</li>
                            <li>Mobile App Development</li>
                            <li>Data Structures & Algorithms</li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Services Cards Slider */}
            <div className="mt-20 relative overflow-hidden">
                {/* Initial Services */}
                <div className={`flex flex-wrap gap-10 justify-center transition-opacity duration-500 ${currentCardGroup === 0 ? 'opacity-100' : 'opacity-0'}`}
                     style={{ display: currentCardGroup === 0 ? 'flex' : 'none' }}>
                    {initialServices.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>

                {/* Remaining Services */}
                {remainingServices.length > 0 && (
                    <div className={`flex flex-wrap gap-10 justify-center transition-opacity duration-500 ${currentCardGroup === 1 ? 'opacity-100' : 'opacity-0'}`}
                         style={{ display: currentCardGroup === 1 ? 'flex' : 'none' }}>
                        {remainingServices.map((service, index) => (
                            <ServiceCard key={service.title} index={index + 4} {...service} />
                        ))}
                    </div>
                )}

                {/* Dot Navigation */}
                {remainingServices.length > 0 && (
                    <div className="flex justify-center mt-8 space-x-3">
                        {[0, 1].map((index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                    currentCardGroup === index ? "bg-white scale-125" : "bg-gray-500"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
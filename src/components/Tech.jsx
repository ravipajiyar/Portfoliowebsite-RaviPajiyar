import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
    const sliderRef = useRef(null);
    const [currentGroup, setCurrentGroup] = useState(0);


    const skillsGroups = [
      [
            { title: "Frontend Development", skills: [{ name: "React.js", level: 90 }, { name: "Next.js", level: 85 }, { name: "Tailwind CSS", level: 95 }] },
            { title: "Backend Development", skills: [{ name: "Node.js", level: 88 }, { name: "Python", level: 85 }, { name: "MongoDB", level: 90 }] },
             { title: "Mobile Development", skills: [{ name: "React Native", level: 88 }, { name: "Flutter", level: 85 }] },
        ],
        [
             { title: "AI & Machine Learning", skills: [{ name: "TensorFlow", level: 92 }, { name: "PyTorch", level: 88 }] },
            { title: "Data Science", skills: [{ name: "Pandas", level: 87 }, { name: "Numpy", level: 82 }] },
            { title: "Database Management", skills: [{ name: "SQL", level: 90 }, { name: "MongoDB", level: 85 }] },
        ],
         [
           { title: "Cloud Platforms", skills: [{ name: "AWS", level: 80 }, { name: "GCP", level: 75 }] },
            { title: "Version Control", skills: [{ name: "Git", level: 86 }, { name: "GitHub", level: 79 }] },
            { title: "Other", skills: [{ name: "Docker", level: 89 }, { name: "Jira", level: 85 }] },
          ]
    ];


     // Automatic Sliding Logic
     useEffect(() => {
      const interval = setInterval(() => {
        setCurrentGroup((prev) => (prev === skillsGroups.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds (adjust as needed)

      return () => clearInterval(interval);
    }, [skillsGroups.length]);


    const handleDotClick = (index) => {
      setCurrentGroup(index);
    }


    return (
        <div className="mt-10">
            {/* Technical Expertise Section */}
            <div className="text-center mb-10">
                <h2 className={`${styles.sectionHeadText} text-center mb-2`}>Technical Expertise</h2>
                <p className="text-secondary text-[16px] font-medium">Comprehensive skillset in computer engineering and software and it industry</p>
            </div>

            {/* Skills Slider Section */}
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentGroup * 100}%)` }}>
                {skillsGroups.map((skillGroup, index) => (
                  <div
                    key={index}
                    className="flex justify-center gap-8 px-8 w-full"
                  >
                    {skillGroup.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className="w-full sm:w-[380px] bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl" // Changed width here to 380px and padding to 8
                      >
                         <h4 className="text-white text-[20px] font-bold mb-4">{group.title}</h4>
                         {group.skills.map((skill, skillIndex) => (
                             <div key={skillIndex} className="mb-4">
                                <div className="flex justify-between items-center mb-1">
                                 <p className="text-secondary text-sm font-medium">{skill.name}</p>
                                <p className="text-secondary text-sm font-medium">{skill.level}%</p>
                                </div>
                                 <div className="w-full bg-black-200 h-2 rounded-full">
                                   <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{ width: `${skill.level}%` }} />
                                  </div>
                             </div>
                       ))}
                    </div>
                 ))}
                 </div>
               ))}
               </div>


                {/* Slider Dots */}
            <div className="flex justify-center mt-4 space-x-2">
               {skillsGroups.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      currentGroup === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></button>
                ))}
             </div>

            </div>

            {/* Existing Technology Icons */}
            <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "skills");
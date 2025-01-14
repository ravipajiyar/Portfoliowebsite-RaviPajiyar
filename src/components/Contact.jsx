import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative w-full max-w-[2100px] mx-auto px-4 min-h-screen">
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full xl:w-[45%] bg-black-100/80 backdrop-blur-sm p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary hover:bg-tertiary/90 transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth Canvas Container */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[700px] md:h-[550px] h-[350px] relative"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Information Icon */}
      <div
        className="fixed bottom-8 right-8 cursor-pointer z-50"
        onClick={() => setShowInfoCard(!showInfoCard)}
      >
        <FaInfoCircle
          className="text-[#00CFFD] text-4xl hover:scale-110 transition-transform"
          title="Contact Information"
        />
      </div>

      {/* Contact Information Card */}
      {showInfoCard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed z-50 bottom-16 right-8 w-[90vw] md:w-[320px] max-w-full bg-black-200/90 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-4"
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={() => setShowInfoCard(false)}
          >
            <FaTimes />
          </button>

          {/* Phone */}
          <div className="flex items-center gap-3 group cursor-pointer hover:bg-black-100/20 p-2 rounded-lg transition-colors">
            <FaPhoneAlt className="text-[#00CFFD] text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-base font-semibold text-white">Call Me</h4>
              <p className="text-sm text-gray-300">+9779841038932</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 group cursor-pointer hover:bg-black-100/20 p-2 rounded-lg transition-colors">
            <FaEnvelope className="text-[#00CFFD] text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-base font-semibold text-white">Email</h4>
              <p className="text-sm text-gray-300">pajiyargravi20011@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 group cursor-pointer hover:bg-black-100/20 p-2 rounded-lg transition-colors">
            <FaMapMarkerAlt className="text-[#00CFFD] text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-base font-semibold text-white">Address</h4>
              <p className="text-sm text-gray-300">Kathmandu, Bagmati, Nepal</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-3 group cursor-pointer hover:bg-black-100/20 p-2 rounded-lg transition-colors">
            <FaClock className="text-[#00CFFD] text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <h4 className="text-base font-semibold text-white">
                Working Hours
              </h4>
              <p className="text-sm text-gray-300">Mon - Fri: 10 AM - 8 PM</p>
              <p className="text-sm text-gray-300">Sat Closed</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

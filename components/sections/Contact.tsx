"use client";
import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicInput from "../DynamicInput";
import CustomButton from "../CustomButton";

const ContactUs: React.FC = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false); // State for loading

  const interests = [
    "Branding",
    "Web Design",
    "Web Development",
    "E-commerce",
    "UI/UX",
    "Graphic Design",
    "Logo Design",
    "Illustration",
    "Social Media Creatives",
    "Business Card",
    "Motion Design & Video",
    "SEO",
    "SMO",
    "PPC",
    "Meta Ads (Fb / Insta)",
    "Others",
  ];

  const toggleIndex = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Map selectedIndices to actual interest names
    const selectedInterests = selectedIndices.map((index) => interests[index]);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form, // Send form data
          interests: selectedInterests, // Include selected interests
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Message Sent!");
      } else {
        toast.error("Error sending message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Ensure that all fields are filled out before submitting. ");
    } finally {
      setLoading(false); // Stop loading
      // Reset the form and selected indices
      setForm({
        name: "",
        email: "",
        message: "",
        mobile: "",
      });
      setSelectedIndices([]); // Reset selected interests
    }
  };

  return (
    <section
      id="contact-us"
      className="max-w-screen-2xl mx-auto px-8 lg:pt-40 md:pt-28 pb-20 pt-16 "
    >
      <h2 className="lg:text-6xl md:text-3xl text-xl tracking-wide  font-bold mb-4 md:leading-[7vh] lg:leading-[10vh]  leading-[5vh]   !text-[#201F1F]">
        Hello! My name is{" "}
        <DynamicInput
          type="text"
          placeholder="your full name"
          name="name"
          value={form.name}
          className="text-black"
          onChange={handleChange}
        />
        and I want to discuss a potential project. You can email me at{" "}
        <DynamicInput
          type="email"
          placeholder="your@email.com"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="text-black"
        />{" "}
        or reach me on{" "}
        <DynamicInput
          type="text"
          placeholder="your phone no."
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="text-black"
        />{" "}
        . Here are some details about my project:
        <textarea
          value={form.message}
          onChange={handleChange}
          name="message"
          rows={1}
          placeholder="My Project is about..."
          className=" mt-1 pl-3 border-b placeholder-gray-300 border-gray-500 w-full outline-none"
        ></textarea>
      </h2>

      <p className="mb-2 lg:text-6xl md:text-3xl text-xl btn-text pb-2 font-bold md:pt-9 pt-0 tracking-wide">
        I'm interested in (select one or more)
      </p>
      <div className="flex flex-wrap md:gap-5 gap-1 tracking-wide">
        {interests.map((interest, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleIndex(index)}
            className={`md:px-3 px-2 py-1 border rounded-md transition-colors duration-300 ${
              selectedIndices.includes(index)
                ? "bg-black text-white text-2xl"
                : "bg-white text-gray-500 border-gray-300"
            }`}
          >
            {interest}
          </motion.button>
        ))}
      </div>

      <div className="pt-5 mx-auto w-max">
        <CustomButton
          disable={loading}
          onClick={handleSubmit}
          className={`${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-black cursor-pointer"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </CustomButton>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactUs;

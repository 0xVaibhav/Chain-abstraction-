import React from "react";
import Socials from "./Socials";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 639 291 7304",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "krishramani03@gmail.com",
  },
  {
    icon: <BsGithub />,
    title: "GitHub Id",
    description: "0xkrish24",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#27272c] text-white mt-8">
      {/* Socials Section */}
      <div className="container mx-auto py-10 border-b border-gray-600">
        <div className="flex justify-center">
          <Socials
            containerStyles="flex justify-center gap-[100px]"
            iconStyles="text-2xl text-accent bg-transparent border border-accent p-3 rounded-full hover:text-primary hover:bg-accent transition"
          />
        </div>
      </div>
      
      {/* Info Section */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start">
              <div className="flex items-center mb-2">
                <div className="w-[40px] h-[40px] bg-[#1f1f23] text-accent rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="ml-3 text-lg font-semibold">{item.title}:</p>
              </div>
              <h3 className="text-gray-300">{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

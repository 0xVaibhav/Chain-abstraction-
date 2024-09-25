import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

// Define some dummy paths for the socials (replace with real links)
const socials = [
  { icon: <FaGithub />, path: "https://github.com" },
  { icon: <FaLinkedin />, path: "https://linkedin.com" },
  { icon: <FaYoutube />, path: "https://youtube.com" },
  { icon: <FaTwitter />, path: "https://twitter.com" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

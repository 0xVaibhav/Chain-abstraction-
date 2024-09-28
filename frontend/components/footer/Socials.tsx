import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

// Define some dummy paths for the socials (replace with real links)
const socials = [
  { icon: <FaGithub />, path: "https://github.com", name: "GitHub" },
  { icon: <FaLinkedin />, path: "https://linkedin.com", name: "LinkedIn" },
  { icon: <FaYoutube />, path: "https://youtube.com", name: "Youtube" },
  { icon: <FaTwitter />, path: "https://twitter.com", name: "Twitter" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <div className={containerStyles +"grid grid-row"}>
                    <Link href={item.path} className={iconStyles}>{item.icon}</Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;

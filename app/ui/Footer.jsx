import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from "./artistique-logo";
import Link from "next/link";

const Footer = () => {
  const ArtistiqueLogo = () => {
    return (
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-base-200">
          <Logo />
        </Link>
      </div>
    );
  };

    return (
      <div data-aos="zoom-out-up" data-aos-duration="1000" className="h-[60vh] w-[100vw] bg-[#8E99AA] relative flex flex-col ">
        <div className="h-[50%] w-[100vw] pl-[80px] pt-[80px]">
          <div className="h-[50px] w-[400px]"><ArtistiqueLogo /></div>
          <p className="h-[100px] w-[350px] text-[16px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in,aliquam sit amet, feugiat eu, orci.</p>
        </div>
        <div className="h-[50%] w-[100vw] relative flex flex-col items-center justify-end pb-[30px]">
          <div className="h-[80px] w-[450px] flex flex-row justify-between mb-[10px]">
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110 text-[50px]">
                <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: "#000000" }} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110 text-[50px]">
                <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#000000",}} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110 text-[50px]">
                <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#000000",}} />
            </div>
            <div className="h-[50px] w-[50px] cursor-pointer group inline-block relative hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-110 text-[50px]">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}} />
            </div>

          </div>
          <div className="h-[30px] w-[750px] relative flex flex-row justify-around text-[14px] font-normal cursor-pointer bottom-[-20px]">
            <p>About Us</p>
            <p>Terms of Use</p>
            <p>Legal Notic</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    )
  }

  export default Footer;
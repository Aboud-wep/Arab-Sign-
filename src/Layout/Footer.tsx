import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import bluesignleft from "../assets/Images/blue_sign_left.png";
import footersign from "../assets/Images/footer_sign.png";

const Footer = () => {
  return (
    <div className="h-auto bg-[url('./src/assets/Images/footer_background.png')] bg-cover bg-center relative overflow-hidden font-janna py-10 sm:py-14 md:py-16">
      <div className="absolute top-[-38px] left-[-239px] hidden lg:block">
        <img src={bluesignleft} alt="Service Image" />
      </div>

      <div className="flex flex-col items-center mt-4 sm:mt-6">
        <img src={footersign} alt="Arab Sign icon" className="w-[120px] sm:w-[150px] md:w-[180px]" />
        <p className="font-bold text-white text-[24px] sm:text-[26px] lg:text-[28px] mt-2">إشارة عربي</p>

        <div className="flex gap-5 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 border-t border-b border-white py-4 sm:py-5 md:py-6 w-full max-w-xs sm:max-w-md md:max-w-lg justify-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-[24px] sm:text-[30px] md:text-[35px]" />
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="text-white text-[24px] sm:text-[30px] md:text-[35px]" />
          </a>
          
          <a href="https://www.youtube.com/@Arab-Sign" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-[24px] sm:text-[30px] md:text-[35px]" />
          </a>
          
          <a href="https://www.instagram.com/arab_sign_plarform?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-[24px] sm:text-[30px] md:text-[35px]" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61551615041165" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-[24px] sm:text-[30px] md:text-[35px]" />
          </a>
        </div>
        
        <p className="text-white text-[16px] md:text-[24px] lg:text-[28px] font-bold mt-4 sm:mt-6">
          جميع حقوق النشر محفوظة - منصة إشارة عربي 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;

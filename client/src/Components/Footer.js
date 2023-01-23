import era from "../Img/era.png"
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { BsTwitch } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

function Footer() {
  
    return (
        <footer className="p-4 bg-white md:px-6 md:py-8 bg-gradient-to-b from-[#181818] to-[#181818]">
    <div className="sm:flex sm:text-center sm:justify-between">
        <a href="index.php" className="flex items-center mb-4 sm:mb-0">
            <img src={era} className="mr-3 h-10" alt="RandyMedia Logo" />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/about" className="transition duration-300 hover:text-[#922729]" href="about.php"><h1 className="text-xl p-1 py-2"><AiOutlineInfoCircle /></h1></Link>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://twitter.com/EraEsportsNews"><h1 className="text-xl p-1 py-2"><AiFillTwitterCircle /></h1></a>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://www.instagram.com/era_esports_club/"><h1 className="text-xl p-1 py-2"><AiOutlineInstagram /></h1></a>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://www.facebook.com/Eraesportsclub"><h1 className="text-xl p-1 py-2"><AiOutlineFacebook /></h1></a>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://www.youtube.com/@eraesports762"><h1 className="text-xl p-1 py-2"><AiOutlineYoutube /></h1></a>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://www.twitch.tv/era_esports_tv"><h1 className="text-xl p-1 py-2"><BsTwitch /></h1></a>
          </li>
          <li>
              <a className="transition duration-300 hover:text-[#922729]" href="https://www.tiktok.com/@era.esports.clips"><h1 className="text-xl p-1 py-2"><FaTiktok /></h1></a>
          </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 created by <a href="https://randymedia.tech/" className="hover:underline">RandyMedia</a>. All Rights Reserved.
    </span>
</footer>
    );
  };
  export default Footer;
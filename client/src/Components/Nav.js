import era from "../Img/era.png"
import { Link } from "react-router-dom";

function Nav() {
  
    return (
        <nav
        class="
            flex flex-wrap
            items-center
            justify-between
            w-full
            py-4
            md:py-0
            px-4
            text-lg text-gray-700
            bg-gradient-to-b from-[#181818] to-[#181818]
            bg-white border-gray-200
        "
        >
        <div>
            <Link to="/">
            <img src={era} width="80" height="80"></img>
            </Link>
        </div>
        <button id="menu-button" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div aria-hidden="true" class="hidden w-full md:block md:w-auto" id="menu">
            <ul
            class="
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between
                md:pt-0"
            >
            <li>
                <Link to="/about" class="transition duration-300 md:p-4 py-2 block text-[#E8E8E8] hover:text-[#922729]" href="about.php"
                >About Us
                </Link>
            </li>
            <li>
                <Link to="/teams" class="transition duration-300 md:p-4 py-2 block text-[#E8E8E8] hover:text-[#922729]" href="services.php"
                >Teams
                </Link>
            </li>
            <li>
                <Link to="/contact" class="transition duration-300 md:p-4 py-2 block text-[#E8E8E8] text-[#E8E8E8] hover:text-[#922729]" href="contact.php"
                >Contact Us
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
  };
  export default Nav;
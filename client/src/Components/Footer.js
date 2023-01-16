import era from "../Img/era.png"

function Footer() {
  
    return (
        <footer class="p-4 bg-white md:px-6 md:py-8 bg-gradient-to-b from-[#181818] to-[#181818]">
    <div class="sm:flex sm:text-center sm:justify-between">
        <a href="index.php" class="flex items-center mb-4 sm:mb-0">
            <img src={era} class="mr-3 h-10" alt="RandyMedia Logo" />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href="about.php"><i class="fa-solid fa-circle-info"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href="https://twitter.com/RandyMediaTech"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href="https://www.instagram.com/randymedia.tech/"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href="https://www.facebook.com/RandyMedia.tech"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href="https://www.linkedin.com/company/randymedia/"><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href=""><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href=""><i class="fa-brands fa-twitch"></i></a>
          </li>
          <li>
              <a class="transition duration-300 p-4 py-2 hover:text-purple-400" href=""><i class="fa-brands fa-tiktok"></i></a>
          </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://randymedia.tech/" class="hover:underline">RandyMedia Pty Ltd</a>. All Rights Reserved.
    </span>
</footer>
    );
  };
  export default Footer;
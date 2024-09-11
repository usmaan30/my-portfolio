import HeroImage from "../assests/heroImage2 (1).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 mt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, node.js Next JS.
          </p>
          <div className="my-2 lg:hidden">
            <SocialLinksMobile />
          </div>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-100}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

// New Component for Mobile Social Links
export const SocialLinksMobile = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/osmanmunir/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/usmaan30",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:usmanmunir1008@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "../../public/UsmanMunir_Resume.pdf",
      download: true,
    },
  ];

  return (
    <ul className="flex flex-row items-center">
      {links.map(({ id, child, href, download }) => (
        <li key={id} className="py-2">
          <a
            href={href}
            className="flex justify-between m-2 p-2 items-center w-full text-white"
            download={download}
            target="_blank"
            rel="noopener noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Home;

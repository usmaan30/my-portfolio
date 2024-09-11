import { SocialLinksMobile } from "./Home";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-lg font-sans flex items-center mb-4 lg:mb-0 lg:mr-6">
          Email:
          <a
            href="mailto:usmanmunir1008@gmail.com"
            className="text-white hover:underline pl-2"
          >
            usmanmunir1008@gmail.com
          </a>
        </p>

        <SocialLinksMobile />
      </div>
    </footer>
  );
};

export default Footer;

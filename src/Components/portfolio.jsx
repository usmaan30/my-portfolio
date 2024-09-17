import rapidCourier from "../assests/portfolio/rapid-courier.jpg";
import simplePotfolio from "../assests/portfolio/simple-portfolio.jpg";
import adoptMe from "../assests/portfolio/adopt-me.jpg";
import finsys from "../assests/portfolio/finsys.jpg";
// import reactParallax from "../assests/portfolio/reactParallax.jpg";
import reactSmooth from "../assests/portfolio/reactSmooth.jpg";
import reactWeather from "../assests/portfolio/reactWeather.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: adoptMe,
      liveLink: "https://adopt-mee-please.netlify.app/",
      codeLink: "https://github.com/usmaan30/adopt-me",
    },
    {
      id: 2,
      src: simplePotfolio,
      liveLink: "https://usmaan30.github.io/simple-Portfolio/",
      codeLink: "https://github.com/usmaan30/simple-Portfolio",
    },
    {
      id: 3,
      src: rapidCourier,
      liveLink: "https://usmaan30.github.io/Rapid-kurier/",
      codeLink: "https://github.com/usmaan30/Rapid-kurier",
    },
    {
      id: 4,
      src: reactSmooth,
      // liveLink: "https://adopt-mee-please.netlify.app/",
      // codeLink: "https://github.com/usmaan30/adopt-me",
    },
    {
      id: 5,
      src: finsys,
      liveLink: "https://usmaan30.github.io/project_finsys/",
      codeLink: "https://github.com/usmaan30/project_finsys",
    },
    {
      id: 6,
      src: reactWeather,
      // liveLink: "https://adopt-mee-please.netlify.app/",
      // codeLink: "https://github.com/usmaan30/adopt-me",
    },
  ];

  return (
    <div
      name="portfolio"
      className="flex items-center bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Picture"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Live
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

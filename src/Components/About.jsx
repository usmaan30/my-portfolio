const About = () => {
  return (
    <div
      name="about"
      className="flex items-center w-full min-h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-12">
          I am Usman Munir, a dynamic Frontend Developer with a strong
          foundation in programming, currently specializing in building modern
          web applications using ReactJS and Tailwind. With practical industry
          experience gained through a 3 months internship, I am dedicated to
          honing my skills and staying up-to-date with the latest technologies.
          My next goal is to delve deeper into Next.js to enhance my
          capabilities and deliver more efficient and scalable solutions.
        </p>
        <br />
        <p className="text-xl">
          I am passionate about web development and always eager to explore new
          opportunities in related fields. While I am currently focused on web
          development, I am also open to expanding my skill set in areas such as
          mobile app development and data science. My adaptability and
          commitment to continuous learning allow me to take on diverse roles
          and contribute meaningfully to any project or team.
        </p>
      </div>
    </div>
  );
};

export default About;

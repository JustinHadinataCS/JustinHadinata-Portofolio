import Space from "./Space";
import AboutMePicture from "../assets/AboutMePicture.png";
function HeroPage() {
  return (
    <>
      {" "}
      <div className="min-h-screen bg-white flex flex-col">
        <nav className="flex justify-center items-center w-full space-x-8 ">
          <a>Home</a>
          <a>Projects</a>
          <a>Skills</a>
          <a>About</a>
          <button className="px-6 py-2 bg-black text-white rounded-full text-center leading-normal">
            Let's Talk
          </button>
        </nav>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-left">
              <h1 className="text-6xl lg:text-8xl mb-4 font-bold leading-tight">
                Hi, I'm Justin
              </h1>
              <h2 className="text-3xl lg:text-4xl font-medium ">
                A Software Engineer
              </h2>
            </div>
          </div>
          <div className="flex-1">
            <Space />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-lg">
        <div className="w-full space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-4xl">Justin Hadinata</h1>
              <h2 className="font-bold text-gray-500 text-lg">
                Focused on MERN stack
              </h2>
            </div>
            <div className="flex-shrink-0 rounded-full">
              {" "}
              <img
                src={AboutMePicture}
                alt="About me profile picture"
                className="w-24 h-24 object-contain rounded-full"
              />
            </div>
          </div>

          <div className="flex items-start text-justify font-semibold text-black text-lg">
            <h1>
              Haloo👋🏻 - I’m a full stack developer bla bla who likes to build
              full-stack applications. I'm a 19-year-old undergraduate student
              with expertise in React, and I'm also proficient in backend
              technologies like Node.js, Express, and Django.I’m a full stack
              developer bla bla who likes to build full-stack applications. I'm
              a 19-year-old undergraduate student with expertise in React, and
              I'm also proficient in backend technologies like Node.js, Express,
              and Django.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;

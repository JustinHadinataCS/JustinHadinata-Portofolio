import AboutMePicture from "../assets/AboutMePicture.png";
import Button from "./Button";

function AboutMeSection() {
  return (
    <div className="mx-auto max-w-lg">
      <div className="w-full space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-4xl">Justin Hadinata</h1>
            <h2 className="font-medium text-gray-500 text-lg">
              Focused on MERN stack
            </h2>
          </div>
          <div className="flex-shrink-0 relative rounded-full">
            <img
              src={AboutMePicture}
              alt="Profile picture"
              className="w-24 h-24 object-cover rounded-full  shadow-lg"
            />
            <div className="absolute bottom-1 right-4 w-2.5 h-2.5 bg-green-500  rounded-full"></div>
          </div>
        </div>

        <div className="flex space-y-5 flex-col items-start text-justify text-black text-lg">
          <h1>
            Haloo👋🏻 -{" "}
            <span className="font-bold">I’m a full stack developer</span> bla
            bla who likes to build full-stack applications. I'm a 19-year-old
            undergraduate student with expertise in React, and I'm also
            proficient in backend technologies like Node.js, Express, and
            Django. I’m a full stack developer bla bla who likes to build
            full-stack applications. I'm a 19-year-old undergraduate student
            with expertise in React, and I'm also proficient in backend
            technologies like Node.js, Express, and Django.
          </h1>
          <div className="flex space-x-4">
            <Button variant="purple">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0"
                fill="currentColor"
                style={{ verticalAlign: "middle" }}
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <>Github</>
            </Button>
            <Button variant="purple">Github</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;

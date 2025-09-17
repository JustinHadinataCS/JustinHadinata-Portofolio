import Space from "./Space";

function HeroPage() {
  return (
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
            <h2 className="text-3xl lg:text-4xl font-medium">
              A Software Engineer
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <Space />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;

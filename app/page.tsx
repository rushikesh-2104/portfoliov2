import { Download } from "lucide-react";

export default function Home() {
  return (
    <>
      <div id="home" className="relative pb-30 md:pb-50">

        <div className="flex">
          <span className="text-white hidden md:block rotate-90 origin-bottom-left pl-65 md:pl-85 md:pb-5 pb-1">
            hrishi210402@gmail.com
          </span>
        </div>

        <div className="flex flex-col items-start md:pt-45 pt-40">
          <h1 className="text-green-500 md:pl-20 pl-5 md:text-9xl text-5xl font-extrabold">
            FRONTEND
          </h1>
          <h2 className="text-white md:pl-20 pl-5 md:text-8xl text-3xl font-extrabold">
            DEVELOPER
          </h2>

          <p className="text-gray-300 hidden md:block md:pl-30 md:pt-5">
            Hi! I'm <b className="text-lg text-green-400">Rushikesh</b>. A Frontend Developer who builds responsive,
            SEO-friendly websites and <br /> web apps, turning ideas into clean
            and modern user interfaces.
          </p>

          <p className="text-gray-300 md:hidden pl-5 pt-2">
            Hi! I'm <b className="text-lg text-green-300">Rushikesh</b>. A Frontend Developer <br />
            who builds responsive, SEO-friendly websites <br />
            and web apps, turning ideas into clean <br />
            and modern user interfaces.
          </p>

          <div className="md:pl-30 pl-5 pt-5 md:pt-5">
            <a 
            className="bg-green-500 flex gap-2 text-white px-5 py-3 text-center rounded" 
            href="/Rushikesh_PM_resume.pdf" 
            download="Rushikesh_PM_resume.pdf">
              <Download/> Resume
            </a>
          </div>

        </div>

        
        <div className="flex md:flex-col pr-3 pt-5 gap-3 md:absolute md:top-50 md:right-20 md:pt-0">

          <div className="text-center flex-col gap-1 pt-15">
            <span className="text-green-500 font-extrabold text-3xl">3+</span>{" "}
            <br />
            <span className="text-white text-md">Months of Internship</span>
          </div>

          <div className="text-center flex-col gap-1 pt-15">
            <span className="text-green-500 font-extrabold text-3xl">5+</span>{" "}
            <br />
            <span className="text-white text-md">Number of Projects</span>
          </div>

          <div className="text-center flex-col gap-1 pt-15">
            <span className="text-green-500 font-extrabold text-3xl">10+</span>{" "}
            <br />
            <span className="text-white text-md">Number of Skills</span>
          </div>
        </div>

      </div>

      <div id="about" className="h-full ">
        
        <div className="px-5 md:px-20">
          <p className="text-slate-200 text-xl md:text-6xl hidden md:block">I believe in a user centered design approach, <br />
           ensuring that every project I work on is tailored <br />
            to meet the specific needs of its users.</p>

            <p className="text-slate-200 text-xl md:text-6xl md:hidden">I believe in a user centered design approach, <br />
           ensuring that every project I work on is tailored <br />
            to meet the specific needs of its users.</p>
        </div>

      </div>
    </>
  );
}

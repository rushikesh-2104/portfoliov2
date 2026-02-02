import { Download } from "lucide-react";
import { Anton, Lora } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",   
});

const lora = Lora({
  subsets: ["latin"],
  weight: "400",   
});

export default function Home() {
  return (
    <>
      <div id="home" className="relative pb-30 md:pb-50">

        <div className="flex">
          <span className="text-white hidden md:block rotate-90 origin-bottom-left pl-65 md:pl-85 md:pb-5 pb-1">
            hrishi210402@gmail.com
          </span>
        </div>

        <div className="flex flex-col items-start md:pt-45 pt-60">
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

      <div id="about" className="h-full pb-10">
        
        <div className="px-5 md:px-20">
          <p className={`${lora.className} text-slate-200 md:text-7xl hidden md:block`}>I believe in a user centered design approach,
           ensuring that every project I work on is tailored
            to meet the specific needs of its users.</p>

            <p className={`${lora.className} text-slate-200 text-2xl md:text-6xl md:hidden`}>
            I believe in a user centered design approach, 
            ensuring that every project I work on is tailored
            to meet the specific needs of its users.
            </p>
        </div>

        <div className="text-slate-200 text-lg pb-2 pl-5 md:pl-20 pt-10 md:pt-20">This is me.</div>
        <div className="w-[90vw] md:w-[88vw] h-[0.5px] md:h-[0.5px] ml-5 md:ml-20 bg-white"></div>
        
        <div className="text-white px-5 md:px-20 pt-2 md:pt-10">
<div className="md:grid grid-cols-2 grid-rows-1 gap-1">
    <div className={`${lora.className} text-3xl md:text-5xl pb-3`}>Hii, I'm Rushikesh.</div>
    <div className="text-md md:text-2xl">I'm a frontend web developer dedicated to turning ideas into creative solutions.
      I specialize in creating seamless and intuitive user experiences.
      My approach focuses on creating scalable, high-performing solutions tailored to both user
      needs and business objectives. By prioritizing performance, accessibility, and responsiveness,
      I strive to deliver experiences that not only engage users but also drive tangible results.
      </div>
</div>
        </div>

        <div className="px-5 md:px-20 pt-20 text-white">
        <p className="font-sans text-2xl">My Stack</p>
  
<div className="md:grid grid-cols-2 grid-rows-1 gap-1 pt-10">

    <div className={`${anton.className} text-4xl`}>FRONTEND</div>

    <div className="flex flex-wrap pt-2 md:pt-0">
      <div className="flex">
      <span>
        <Image alt="HTML" height={70} width={70} quality={75} src="/html.png" />
      </span>
      <span className="pt-5 text-2xl font-sans">
        HTML
      </span>
      </div>

      <div className="flex pl-10">
      <span>
        <Image alt="css3" height={70} width={70} quality={100} src="/css3.png"/>
      </span>
      <span className="pt-5 text-2xl font-sans">
        CSS3
      </span>
      </div>

      <div className="flex md:pl-10">
      <span>
        <Image alt="javascript" height={70} width={70} quality={100} src="/js.png" />
      </span>
      <span className="pt-5 text-2xl font-sans">
        JAVASCRIPT
      </span>
      </div>


      <div className="flex pt-5">
      <span>
        <Image alt="angular" height={60} width={60} quality={100} src="/ng.png" />
      </span>
      <span className="pt-3 text-2xl font-sans">
        ANGULAR
      </span>
      </div>

      <div className="flex pl-10 pt-5">
      <span>
        <Image alt="REACT" height={50} width={50} quality={100} src="/react.png" />
      </span>
      <span className="pt-3 pl-1 text-2xl font-sans">
        REACT
      </span>
      </div>

      <div className="flex md:pl-10 pt-5">
      <span>
        <Image alt="bootstrap" height={50} width={50} quality={100} src="/bootstrap.png" />
      </span>
      <span className="pt-3 pl-1 text-2xl font-sans">
        BOOTSTRAP
      </span>
      </div>

      <div className="flex md:pt-5 pt-8">
      <span>
        <Image alt="typescript" height={60} width={60} quality={100} src="/ts.png" />
      </span>
      <span className="pt-3 text-2xl font-sans">
        TYPESCRIPT
      </span>
      </div>

      <div className="flex pl-5 md:pt-5 pt-8">
      <span>
        <Image alt="nextjs" height={50} width={50} quality={100} src="/next.png" />
      </span>
      <span className="pt-3 pl-1 text-2xl font-sans">
        NEXT.JS
      </span>
      </div>

       <div className="flex md:pl-5 pt-5">
      <span>
        <Image alt="GSAP" height={50} width={50} quality={100} src="/gsap.png" />
      </span>
      <span className="pt-3 pl-1 text-2xl font-sans">
        GSAP
      </span>
      </div> 

      <br />
    </div>
    

    
</div>

<div className="md:grid grid-cols-2 grid-rows-1 gap-1 pt-15">

    <div className={`${anton.className} text-4xl`}>BACKEND</div>

    <div className="flex flex-wrap">
      <div className="flex">
      <span>
        <Image alt="nodejs" height={70} width={70} quality={100} src="/node.png" />
      </span>
      <span className="pt-5 pl-2 text-2xl font-sans">
        NODE.JS
      </span>
      </div>

      <div className="flex md:pl-10 pl-2">
      <span>
        <Image alt="EXPRESS" height={40} width={40} quality={100} src="/express.png" className="md:pt-4 pt-3"/>
      </span>
      <span className="md:pt-5 pt-4 pl-2 text-2xl font-sans">
        EXPRESS.JS
      </span>
      </div>

      
    </div>
    

    
</div>

<div className="md:grid grid-cols-2 grid-rows-1 gap-1 pt-15">

    <div className={`${anton.className} text-4xl`}>DATABASE</div>

    <div className="flex flex-wrap">
      <div className="flex">
      <span>
        <Image alt="mysql" height={70} width={70} quality={100} src="/mysql.png" />
      </span>
      <span className="pt-7 pl-2 text-2xl font-sans">
        MYSQL
      </span>
      </div>

      <div className="flex md:pl-10 pl-5">
      <span>
        <Image alt="mongodb" height={50} width={50} quality={100} src="/mongodb.png" className="pt-5"/>
      </span>
      <span className="pt-7 text-2xl font-sans">
        MONGODB
      </span>
      </div>

      
    </div>
    

    
</div>

<div className="md:grid grid-cols-2 grid-rows-1 gap-1 pt-15">

    <div className={`${anton.className} text-4xl`}>TOOLS</div>

    <div className="flex flex-wrap">
      <div className="flex pt-5 md:pt-0">
      <span>
        <Image alt="git" height={70} width={70} quality={100} src="/git.png" />
      </span>
      <span className="pt-5 pl-2 text-2xl font-sans">
        GIT
      </span>
      </div>

      <div className="flex pl-10 pt-5 md:pt-0">
      <span>
        <Image alt="vercel" height={50} width={50} quality={100} src="/vercel.png" className="py-1 mt-1 bg-white"/>
      </span>
      <span className="pt-5 pl-2 text-2xl font-sans">
        VERCEL
      </span>
      </div>


      <div className="flex md:pl-5 pl-2">
      <span>
        <Image alt="postman" height={50} width={50} quality={100} src="/postman.png" className="pt-2"/>
      </span>
      <span className="pt-5 pl-2 text-2xl font-sans">
        POSTMAN
      </span>
      </div>
      
    </div>
    

    
</div>      

        </div>

      </div>
    </>
  );
}

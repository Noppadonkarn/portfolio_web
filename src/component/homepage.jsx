import { Introduce } from "./introducePage";
import { Project } from "./projectPage";
import { Contact } from "./contactpage";
import "../App.css"


function HomePage() {
  return (
    <>
    <div className="font-serif flex flex-col w-screen h-full pt-[39px] pr-[165px] pl-[165px] bg-[#151515]">
      <Introduce />
      <Project />   
    </div>
    <div className="font-serif flex flex-col w-screen h-full pt-[39px] pr-[165px] pl-[165px] bg-[#242424]">
    <Contact />
    </div>  
  </> 
  )
}

export default HomePage;


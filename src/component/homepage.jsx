import { Introduce } from "./introduce";
import { Project } from "./projectPage";

function HomePage() {
  return (
    <div className="flex flex-col w-screen h-screen pt-[39px] pr-[165px] pl-[165px]">
      <Introduce />
      <Project />
    </div>
  )
}

export default HomePage;


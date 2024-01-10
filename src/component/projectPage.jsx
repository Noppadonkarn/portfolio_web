import { Projects } from "../data/projects"

export function Project() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="heading_XL">
          Projects
        </div>
        <div>
          CONTACT ME
        </div>
      </div> 
      <div className="flex flex-warp pb-[70px]">
        {
          Projects.map((items) => {
            return (
              <div className=""></div>
            )
          })
        }
      </div>
    </div>
  )
}
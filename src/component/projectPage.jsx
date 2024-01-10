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
      <div className="flex flex-warp">
        {
          Projects.map((items) => {
            return (
              <div></div>
            )
          })
        }
      </div>
    </div>
  )
}
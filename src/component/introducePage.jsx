import { Skill } from "../data/skill"
import githubImage from "../image/icons8-github-96.png"
import linkedinImage from "../image/icons8-linkedin-128.png"
import facebookImage from "../image/icons8-facebook-100.png"
import instagramImage from "../image/icons8-instagram-96.png"

export function Introduce() {
  return (
    <div className="flex flex-col gap-[127px]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading_X">noppadon sangthong</h1  >
        </div>
        <div className="flex items-center gap-[15px]">
          <a href="https://github.com/Noppadonkarn/" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} className="w-[25px] h-[25px]" />
          </a>
          <a href="https://www.linkedin.com/in/noppadon-sangthong-68b590285/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} className="w-[30px] h-[30px]" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100049151163223" target="_blank" rel="noopener noreferrer">
            <img src={facebookImage} className="w-[30px] h-[30px]" />
          </a>
          <a href="https://www.instagram.com/_karun.karn/" target="_blank" rel="noopener noreferrer">
            <img src={instagramImage} className="w-[25px] h-[25px]" />
          </a>
        </div>
      </div>
      <div>
        <div className="heading_XL">
          <p>Nice to meet you!</p>
          <p>I'm Noppadon Sangthong.</p>
        </div>
        <div className="text pt-[43px]">
          <p>based in the Bangkok Thailand, I'm trining in a full-stack developer</p>
          <p>passionate about building accessible web apps </p>
          <p>that users love.</p>
        </div>
        <div className="pt-[66px]">
          CONTACT ME
        </div>
      </div>
      <div>
        <hr className="border-0 border-t-2 border-t-white pb-[72px]" />
        <div className="flex flex-wrap gap-[30px] pb-[82px]">
          {
          Skill.map((items) => {
            return(
              <div className="flex flex-col gapA-[14px] w-[345px] pb-[58px]">
              <div className="heading_L">{items.skill_name}</div>
              <div className="text">{items.experience} Month Experience</div>
              <div className="text">Level: {items.level}</div>
            </div>
          )})
          }
        </div>
      </div>
    </div>
  )
}
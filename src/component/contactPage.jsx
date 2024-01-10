import { useState, useEffect } from "react"
import githubImage from "../image/icons8-github-96.png"
import linkedinImage from "../image/icons8-linkedin-128.png"
import facebookImage from "../image/icons8-facebook-100.png"
import instagramImage from "../image/icons8-instagram-96.png"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [borderColorName, setBorderColorName] = useState("")
  const [borderColorEmail, setBorderColorEmail] = useState("")

  const handleChangeName = (e) => {
    const isAlphabetic = /^[A-Za-z ]+$/;
   
    if (isAlphabetic.test(e.target.value)) {
      setBorderColorName('border-[#4EE1A0]');
      setName(e.target.value);
    } else if (!isAlphabetic.test(e.target.value)) {
      setBorderColorName('border-[#FF6F5B]');
    } else if (e.target.value === "") {
      setBorderColorName('border-white'); 
    }
  }

  const handleChangeEmail = (e) => {
    const caseA = e.target.value.includes("@gmail.com");
    const caseB = e.target.value.includes("@hotmail.com")
    
    if (caseA || caseB) {
      setBorderColorEmail('border-[#4EE1A0]');
      setEmail(e.target.value);
    } else if (!caseA || !caseB) {
      setBorderColorEmail('border-[#FF6F5B]');
    } else if (e.target.value === "") {
      setBorderColorEmail('border-white'); 
    }
  }
 

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[36px]">
          <p className="heading_XL">Contact</p>
          <div className="text">
            <p>I would love to hear about your project and how I</p>
            <p>could help. Please fill in the form, and I’ll get back</p>
            <p>to you as soon as possible.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <input id="" type="text" placeholder="NAME" className={`w-[445px] h-[43px] border-b-2 bg-transparent ${borderColorName}`} onChange={handleChangeName}/>
          <input id="" type="text" placeholder="EMAIL" className={`w-[445px] h-[43px] border-b-2 bg-transparent ${borderColorEmail}`} onChange={handleChangeEmail}/>
          <input id="" type="text" placeholder="MESSAGE" className="w-[445px] h-[107px] border-b-2 bg-transparent border-white" onChange={(e) => {setMessage(e.target.value)}}/>
        </div>
      </div>
      <button className="heading_M flex justify-end pt-[32px] pb-[104px] hover:text-[#4EE1A0] hover:underline underline-offset-8 transition duration-500 ease-in-out">SEND MESSAGE</button>
      <hr className="border-0 border-t-2 border-t-white pb-[72px] " />
      <div className="flex justify-between items-center pb-[92px]">
        <div>
          <h1 className="heading_X">noppadon sangthong</h1>
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
    </div>
  )
}
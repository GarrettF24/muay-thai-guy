import "./Footer.css"
import { FiGithub } from "react-icons/fi"
import { SiLinkedin } from "react-icons/si"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://github.com/WAMS24">
          <FiGithub className="socials" />
        </a>
        <a href="https://www.linkedin.com/in/garrettfoster24/">
          <SiLinkedin className="socials" />
        </a>
      </div>
    </div>
  )
}

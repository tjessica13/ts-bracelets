import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex justify-center items-center p-10">
            <p>&copy; Created by Jessica Tan 2024</p>
            <div className="socials flex justify-around items-center gap-2 p-2">
                <a href="https://www.linkedin.com/in/t-jessica/"><FaLinkedin size={20} /></a>
                <a href="https://github.com/tjessica13/ts-bracelets"><FaGithub size={20} /></a>
            </div>
        </div>
    );
}

export default Footer
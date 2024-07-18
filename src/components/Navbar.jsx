
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 flex-row w-[100%]">

            <div className='flex w-[30px] h-auto'>
                <img className="mx-2 w-[30px] h-auto" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaFacebook />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
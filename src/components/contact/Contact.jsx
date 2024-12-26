import './contact.scss'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Contact = ()=> {

    return <div className='contact-container'>
    <h1 className='title'>Contact us</h1>
        <div className="content">
            <div className="call-me">
                <button><a href="tel:+218913523246">call-me</a></button>
            </div>
            <div className="text-icons">
                <div className="text">
                    <h3>Location : <MdLocationPin/>misurata, Libya</h3>
                    <h3>Developer : Siraj</h3>
                    <h3>Sponsered by : Lorem</h3>
                </div>
                <div className="icons">
                    <div className="icon1 icon">
                    <FaFacebook className='facebook'/>
                    <span>FaceBook</span>
                    </div>
                    <div className="icon1 icon">
                    <FaSquareInstagram className='instagram'/>
                    <span>Instagram</span>
                    </div>
                    <div className="icon1 icon">
                    <FaLinkedin className='linkedin'/>
                    <span>Linkedin</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
}

export default Contact
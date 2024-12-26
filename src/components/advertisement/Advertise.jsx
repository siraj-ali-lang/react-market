import './advertise.scss'
import img1 from '../images/category/gaming.png'
import img2 from '../images/category/smartwatch2-removebg-preview.png'
import img3 from '../images/category/speaker.png'
import img4 from '../images/category/earphone.png'
import img5 from '../images/category/macbook.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Advertise = ()=> {
    useEffect(()=> {
        AOS.init({duration:1000});
    }, [])

    return <div className='container-adv'>
        <div className="rows-container">
        <h1 className='title'>Advertisment</h1>
            <div className="content1">
                <div data-aos='fade-right' data-aos-delay='900' className="box1">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <h2>X-Box 360</h2>
                </div>
                <div data-aos='fade-up' data-aos-delay='1300' className="box2">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <h2>Smart Watch</h2>
                </div>
                <div data-aos='fade-left' data-aos-delay='1100' className="box3">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <h2>Model Speaker</h2>
                </div>
            </div>
            <div className="content2">
                <div data-aos='fade-up' data-aos-delay='1100' className="box4">
                    <div className="img">
                        <img src={img4} alt="" />
                    </div>
                    <h2>Ear Phone</h2>
                </div>
                <div data-aos='fade-down' data-aos-delay='1100' className="box5">
                    <div className="img">
                        <img src={img5} alt="" />
                    </div>
                    <h2>MAC Book</h2>
                </div>
            </div>
        </div>
    </div>
}
export default Advertise
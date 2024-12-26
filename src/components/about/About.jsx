import './about.scss'
import img1 from '../images/category/vr.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const About = ()=> {

    useEffect(()=> {
        AOS.init({duration:1000});
    }, [])

    return <div className='about-container'>
        <h1 className='title'>GET WHO WE ARE</h1>
        <div className="content">
        <div className="text">
            <h1 className='styled-h1'>Head Line</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo molestias maiores dolor repudiandae praesentium pariatur adipisci explicabo necessitatibus nam dolores?</p>
            <h1>AI Technology</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam vitae illo! Maxime obcaecati, assumenda corporis omnis modi debitis est ea repudiandae? Provident, qui accusantium?</p>
        </div>
        <div data-aos='flip-left' data-aos-delay='650' className="image">
            <img src={img1} alt=""/>
        </div>
    </div>
    </div>
}
export default About
import './products.scss'
import img1 from '../images/product/p-1.jpg'
import img2 from '../images/product/p-2.jpg'
import img3 from '../images/product/p-3.jpg'
import img4 from '../images/product/p-4.jpg'
import img5 from '../images/product/p-5.jpg'
import img6 from '../images/product/p-7.jpg'
import img7 from '../images/product/p-9.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Products = ()=> {
    useEffect(()=> {
            AOS.init({duration:1000});
        }, [])

    return <div className='products-container'>
        <h1 className='title'>GET SOME PRODUCTS</h1>
        <div className="row1">
            <div data-aos='fade-right' data-aos-delay='600' className="box1 box">
                <h1 data-aos='fade-left' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-down' data-aos-delay='600' className="box2 box">
            <h1 data-aos='fade-up' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img2} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-down' data-aos-delay='600' className="box3 box">
            <h1 data-aos='fade-up' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img3} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-left' data-aos-delay='600' className="box4 box">
            <h1 data-aos='fade-right' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img4} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
        </div>
        <div className="row2">
            <div data-aos='fade-rught' data-aos-delay='600' className="box1 box">
            <h1 data-aos='fade-left' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img5} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-up' data-aos-delay='600' className="box2 box">
            <h1 data-aos='fade-down' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img6} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-up' data-aos-delay='600' className="box3 box">
            <h1 data-aos='fade-down' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img7} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
            <div data-aos='fade-left' data-aos-delay='600' className="box4 box">
            <h1 data-aos='fade-right' data-aos-delay='500'>Head Phone</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <h3>price : 25$</h3>
            </div>
        </div>
    </div>
}

export default Products
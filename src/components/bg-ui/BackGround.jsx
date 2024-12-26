import './background.scss'
import img1 from '../images/mass.jpg'
import img2 from '../images/dark-stair.jpg'
import img3 from '../images/lady.jpg'

//import img1 from '../images/transport-img/ship-1.jpg'
//import img2 from '../images/transport-img/container-2.jpg'
//import img3 from '../images/transport-img/ship-3.jpg'
import img4 from '../images/transport-img/container-4.jpg'
import img5 from '../images/transport-img/ship-5.jpg'
import {useState} from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {motion} from 'framer-motion'


const Background = ()=> {
    const content = [{
        id:1,img:img1,text:'Get The Best Products'
    },
    {
        id:2,img:img2,text:'Get The Best Products2'
    },
    {
        id:3,img:img3,text:'Get The Best Products3'
    },
    {
        id:4,img:img4,text:'Get The Best Products3'
    },
    {
        id:5,img:img5,text:'Get The Best Products3'
    },
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    function handleNext(){
        setCurrentSlide(currentSlide === content.length -1 ? 0 : currentSlide + 1)
    }
    function handlePrev(){
        setCurrentSlide(currentSlide ===  0 ? content.length -1 : currentSlide -1)
    }
    /*document.addEventListener('DOMContentLoaded', interVal())
    function interVal(){
        setInterval(handleNext, 5000)
    }*/
    
    //setInterval(handleNext, 10000);

    return <div className='bg-container'>
        
        <div className="slides">
            {
                content && content.length ?
                content.map((item, index) => <div className={currentSlide === index ? 'current-slide':
                    'current-slide hide-current-slide'} key={item.id}>
                        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={()=>handlePrev()}/>
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="text">
                    <motion.h1 
                    style={{overflow: 'hidden',whiteSpace:'nowrap'}}
                    initial={{width:0}}
                    animate={{width:'100%'}}
                    transition={{duration:2,ease:'easeInOut'}}
                    >{item.text}</motion.h1>
                    </div>
                    <BsArrowRightCircleFill className='arrow arrow-right' onClick={()=>handleNext()}/>
                </div>)
                :null
            }
        </div>
        
    </div>
}
export default Background
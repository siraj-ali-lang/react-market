import About from "./components/about/About"
import Advertise from "./components/advertisement/Advertise"
import Background from "./components/bg-ui/BackGround"
import Navbar from "./components/navbar/Navbar"
import './app.scss'
import Products from "./components/products/Products"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import Slider from "./components/slider/Slider"



const App = ()=> {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section>
      <Background/>
      {/*<Slider/>*/}
    </section>
    <section>
      <About/>
    </section>
    <section className="alzab">
      <Advertise/>
    </section>
    <section>
      <Products/>
    </section>
    <section>
      <Footer/>
    </section>
    <section>
      <Contact/>
    </section>
  </div>
}

export default App
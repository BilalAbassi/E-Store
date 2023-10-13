import Slider from "@/components/Home/Slider";
import TopNavbar from "../components/outercomponents/TopNav"
import Mobile_Nav from '@/components/outercomponents/Mobile_Nav'
import Social from '@/components/outercomponents/Soical'
import Footer from '@/components/outercomponents/Footer'
import Navbar from "@/components/outercomponents/Navbar";


export default function Home() {
  return (
    <div>
    <TopNavbar/>
    <Navbar/>

        <Mobile_Nav/>


    <main className="">
      {/* All HOME UI  */}
      
  
    <Slider/>
    </main>
    <Social/>
        <Footer/>
    </div>
  )
}

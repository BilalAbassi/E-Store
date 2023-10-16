import Slider from "@/components/Home/Slider";
import TopNavbar from "../components/outercomponents/TopNav"
import Mobile_Nav from '@/components/outercomponents/Mobile_Nav'
import Social from '@/components/outercomponents/Soical'
import Footer from '@/components/outercomponents/Footer'
import Navbar from "@/components/outercomponents/Navbar";
import Product_Slider from "@/components/Home/Product_Slider";
import MyProvider from "../components/Contaxt/Contaxt_API"


export default function Home() {

  return (
    <MyProvider>
    
    <div>
    <TopNavbar/>
    <Navbar/>

        <Mobile_Nav/>


    <main className="">
      {/* All HOME UI  */}
      
  
    <Slider/>
    <Product_Slider name="NEW" second_name="RELEASES" color_s="#F8F8F8" />
    <Product_Slider name="BEST" second_name="SELLERS" color_s="#FFFFFF" />
    <Product_Slider name="TOP" second_name="THIS WEEK" color_s="#F8F8F8" />




  
    </main>
    <Social/>
        <Footer/>
    </div>
    </MyProvider>
  )
}

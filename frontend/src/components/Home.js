import TextCard from "./count";
import EcommerceProductListing from "./Productmain";
import FadeCarousel from "./Slider";
import ImageCard from "./sponsers";


export default function Home() {
    return (
      <>
      <FadeCarousel/>
      <EcommerceProductListing/>
      <ImageCard/>
      <TextCard/>
      </>
    );
  }
  

// import { useState } from "react";
import InfluencerSection from "./InfluencerSection";
import DiscussionSection from "./Disscusion";
import PageIntro from "./Intro";
import WorkSlider from "../Work/WorkSlider";

import anmol from "../../Images/anmol.jpg";
import huma from "../../Images/huma.jpg";
import ishani from "../../Images/ishani.jpg";
import vishnu from "../../Images/vishnu.jpg";
import prathana from "../../Images/prathana.jpg";
import piyush from "../../Images/piyush.jpg";


const influencersData = [
    {
      name: "Anmol",
      followers: "1M",
      image: anmol,
    },
    {
      name: "Huma",
      followers: "800K",
      image: huma,
    },
    {
      name: "Ishani",
      followers: "500K",
      image: ishani,
    },
    {
        name: "Vishnu",
        followers: "1M",
        image: vishnu
      },
      {
        name: "Prathana",
        followers: "800K",
        image: prathana,
      },
      {
        name: "Piyush",
        followers: "500K",
        image: piyush,
      },
  ];
  
 

function Blogger() {

    // const [currentImage, setCurrentImage] = useState(0);

    // const nextImage = () => {
    //   setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    // };
  
    // const prevImage = () => {
    //   setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    // };
  return (
  <>
 

    {/* video section  */}

    <PageIntro></PageIntro>
    
    <InfluencerSection influencers={influencersData} />
   
    <WorkSlider></WorkSlider>
      {/* <GallerySection currentImage={currentImage} galleryImages={galleryImages} nextImage={nextImage} prevImage={prevImage} /> */}
      <DiscussionSection />
      
      
    

  </>
  )
}

export default Blogger

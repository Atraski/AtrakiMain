


// import About from './About';
// import Vision from './Vision';
// import Mission from './Mission';
import PhotoGallery from './PhotoGallery';
import Services from './Services';
import BrandCollaboration from './BrandCollaboration';
import Models from './Models';

const FashionLandingPage = () => {

  return (
      <main className='bg-gradient-to-b from-purple-10 to-black'>
       
          {/* <Hero /> */}
          <PhotoGallery />
          <Models></Models>
          <Services />
          <BrandCollaboration />
        
       
       
      </main>
   
  );
};

export default FashionLandingPage;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
// import Work from './Components/Work/Work';
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Blogger from './Components/Blogger/Blogger';
import HomePage from './Components/HomePage/HomePage';
import Header2 from './Components/Header/Header2';
import TeamSection from './Components/OurTeam/TeamSection';
import AnimatedBusinessEShower from './Components/EShower/EShower';
import Gallery from './Components/Gallery/Gallery';
import CareersPage from './Components/Careers/Career';
import FashionPage from './Components/AtraskiFashion/Fashion';
import OurPortfolio from './Components/Portfolio/OurPortfolio';
import AtraskiEvents from './Components/AtraskiEvents/AtraskiEvents';

import CustomCursor from './Components/CustomeCursor';
import NewPage from './Components/NewPage/NewPage';
import Segment from './Components/Work/Segments';
// import Segments from './Components/Work/Segments';


function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
       

     <Header2></Header2> {/* Always visible */}

      <main>
       <CustomCursor></CustomCursor>
        <div className='w-full min-h-screen bg-zinc-950 rounded-b-3xl'>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />   {/* Home page */}

            <Route path="/home" element={<HomePage></HomePage>} /> {/* Home page */}

            <Route path="/about" element={<About />} /> {/* About page */}

            <Route path="/oursegments" element={<Segment></Segment>} /> 
            
            <Route path="/bloggermela" element={<Blogger></Blogger>}/> {/* Work page */}

            <Route path="/ourteam" element={<TeamSection></TeamSection>} />
            
            <Route path="/e-shower" element={<AnimatedBusinessEShower></AnimatedBusinessEShower>} /> 

            <Route  path="/gallery" element={<Gallery></Gallery>}/>

            <Route path='/career' element={<CareersPage></CareersPage>} ></Route>

            <Route path='/atraskifashion' element={<FashionPage></FashionPage>}/>

             <Route path='/portfolio' element={<OurPortfolio></OurPortfolio>}></Route>  
                 
            <Route path='/AtraskiEvents' element={<AtraskiEvents></AtraskiEvents>}/> 
            <Route path='/newpage' element={<NewPage></NewPage>}></Route>
            </Routes>
         
        </div>
         
       
      </main>


      <Footer /> {/* Always visible */}

       
    </Router>
  );
}

export default App;

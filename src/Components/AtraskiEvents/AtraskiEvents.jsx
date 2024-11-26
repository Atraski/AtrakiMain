
import HeroSection from './HeroSection';
import Departments from './Services';
import EventsWork from './EventsWork';
// import EventsFooter from './EventsFooter';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Departments />
      <EventsWork/>
      {/* <EventsFooter></EventsFooter> */}
    </div>
  );
}

export default App;


import Banner from './Components/Banner';
import Introduction from './Components/Introduction';
import Items from './Components/Items';
import Navbar from './Components/Navbar';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
  <>
    <Navbar/>
    <Banner/>
    <Introduction/>
    {/* <Items/> */}
    <Testimonial/>
    <Blog/>
    {/* <Contact/> */}
  </>
  );
}

export default App;

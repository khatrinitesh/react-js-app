import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// layout
import Main from '../layout/Main';
// pages
import Home from '../pages/Home';
import About from './../pages/About';
import Service from './../pages/Service';
import Contact from './../pages/Contact';
import Error from './../pages/Error';

const RoutesApp = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Main/>} >
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default RoutesApp
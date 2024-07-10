import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import ScrollTop from "./components/ScrollTop";

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}/>
      </Routes>
      <ScrollTop/>
     </Router>
    </>
  )
}

export default App

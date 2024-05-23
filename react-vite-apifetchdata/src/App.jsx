import React from 'react'
// import CustomApp from './7/app';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import List from './21/list';
import Detail from './21/listdetail';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path={`/list/:idParams`} element={<Detail/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

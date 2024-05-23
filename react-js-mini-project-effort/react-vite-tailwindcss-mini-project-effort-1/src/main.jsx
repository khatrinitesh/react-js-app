
import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router
} from "react-router-dom";
import AppExample from './App';
import './index.css';
// import AppExample from './App';
// import Layout from './project/project32/layout';
// import Home from './project/project32/pages/home';
// import About from './project/project32/pages/about';
// import User from './project/project32/pages/user';
// import Error from './project/project32/pages/error';
// import Github from './project/project32/pages/github';
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user" element={<User />}>
//           <Route path=':userid' element={<User/>}/>
//         </Route>
//         <Route path="/github" element={<Github />} />
//       </Route>
//       <Route path="*" element={<Error />} />
//       </>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Auth0Provider
    domain="dev-ywo84tk04gj3t6e6.us.auth0.com"
    clientId="HiqI1WnqAHQYClb3kJbPZMoJYVwdCgBN"
    redirect_uri={window.location.origin}
  > */}
    <Router>
      <AppExample />
    </Router>
    {/* </Auth0Provider> */}
  </>,
)

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import { PATHS } from "../constants/constants";
import LoadingSpinner from "./../components/LoadingSpinner";

const AppComp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set your desired timeout duration

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures useEffect runs only on mount
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path={PATHS.ABOUT} element={<About />} />
              <Route path={PATHS.SERVICES} element={<Service />} />
              <Route path={PATHS.CONTACT} element={<Contact />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default AppComp;

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<MainLayout/>,
//         children:([
//             {
//                 index:true,
//                 element:<Home/>
//             },
//             {
//                 path:PATHS.ABOUT,
//                 element:<About/>
//             },
//             {
//                 path:PATHS.SERVICES,
//                 element:<Service/>
//             },
//             {
//                 path:PATHS.CONTACT,
//                 element:<Contact/>
//             },
//         ])
//     },
//     {
//         path:"*",
//         element:<Error/>
//     }
// ])

// export default router;

  import React, { useEffect, useState } from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import { createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
  import Home from './pages/Home.jsx'
  import About from './pages/About.jsx'
  import Contact from './pages/Contact.jsx'
  import Main from './layout/MainLayout.jsx'
  import Error from './pages/Error';
  import LoadingComponent from './components/Loading';

  const App =() => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      // No need for clean-up logic here since we aren't subscribing to any external resources
    }, []);
  
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main />,
        children: [
          { path: '', element: <Home /> }, // Default route (index route)
          { path: '/about', element: <About /> },
          { path: '/contact', element: <Contact /> },
        ],
      },
      { path: '*', element: <Error /> }, // Catch-all route for 404 errors
    ]);
  
    if (loading) {
      return <LoadingComponent />;
    }
  
    return (
      <RouterProvider router={router}>
        {/* No need for an empty fragment here */}
        {/* The Navigate component will handle the redirection */}
        <Navigate to="/" replace />
      </RouterProvider>
    );
  };
  ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

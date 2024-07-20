import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../store';

const Splash = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const timeout = setTimeout(() => {
          dispatch(setPage('home'));
        }, 0);
    
        return () => clearTimeout(timeout);
      }, [dispatch]);

  return (
    <div>
        <h1>Splash Page</h1>
        <div className="spinner"></div>
    </div>
  )
}

export default Splash
import React from 'react';
import {ThemeProvider} from 'react-bootstrap';

export default function Layout() {
  return (
    <div>
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
        >
        <div>Your app...</div>
        </ThemeProvider>
    </div>
  )
}

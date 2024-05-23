import React from 'react';
import GridSystem from './layout/grid';
import Layout from './layout/layout';
import Stacks from './layout/stacks';
import FormsApp from './forms/forms';
import "bootstrap/dist/css/bootstrap.css";

export default function ReactBootstrap() {
  return (
    <>
      <FormsApp/>
      {/* <Stacks/> */}
      {/* <GridSystem/>
      <Layout/> */}
    </>
  )
}

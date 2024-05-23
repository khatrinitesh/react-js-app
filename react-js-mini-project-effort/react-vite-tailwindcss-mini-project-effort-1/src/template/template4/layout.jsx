import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './styling/style.css';
import Banner from './components/banner';
import SectionService from './components/section_service';
import SectionBest from './components/section_best';
import SectionAdvantage from './components/section_advantage';
import SectionYoga from './components/section_yoga';
import SectionForm from './components/section_form';
import SectionExpertTrainers from './components/section_expert_trainers';
import SectionQueries from './components/section_queries';
import Footer from './components/footer';

export default function Layout() {
  return (
    <div className='main-container yoga-template'>
      <Banner/>
      <SectionService/>
      <SectionBest/>
      <SectionAdvantage/>
      <SectionYoga/>
      <SectionForm/>
      <SectionExpertTrainers/>
      <SectionQueries/>
      <Footer/>
    </div>
  )
}

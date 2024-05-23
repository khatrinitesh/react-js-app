import React from 'react';
import MenuIconApp from '../components/menuIcon/1';
import Accordion from '../components/accordion/1';
import Tabs from '../components/tabs/1';
import VerticalTabs from '../components/verticalTabs/1';
import FullPageTabs from '../components/fullPageTabs/2';
import TopNavigation from '../components/topNavigation/1';
import SplitNavigation from '../components/splitNavigation/1';
import NavbarWithIcons from '../components/navbarWithIcons/1';
import SearchMenuApp from '../components/searchMenu/2';
import TemplateLiterals from '../components/templateLiterals/2';
import ConditionalRendering from '../components/conditionalRendering/1';

export default function Home() {
  return (
    <div className='content'>
      Home
      <hr/>
      <MenuIconApp/>
      <hr/>
      <Accordion/>
      <hr/>
      <Tabs/>
      <hr/>
      <VerticalTabs/>
      <hr/>
      <FullPageTabs/>
      <hr/>
      <TopNavigation/>
      <hr/>
      <SplitNavigation/>
      <hr/>
      <NavbarWithIcons/>
      <hr/>
      <SearchMenuApp/>
      <hr/>
      <TemplateLiterals/>
      <hr/>
      <ConditionalRendering/>
    </div>
  )
}

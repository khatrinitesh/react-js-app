import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function FullPageTabs() {
  return (
    <>
    <Tabs defaultActiveKey="tab1" id="full-page-tabs">
      <Tab eventKey="tab1" title="Tab 1">
        Content for Tab 1
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        Content for Tab 2
      </Tab>
      <Tab eventKey="tab3" title="Tab 3">
        Content for Tab 3
      </Tab>
    </Tabs>
    </>
  )
}

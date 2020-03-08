import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Hotels.scss';

function Hotels() {
  return (
    <div className='hotels'>
      <div className="golf-course__header">
      <img src={require('../../Images/hotels1.jpg')} alt="hotels" />
      </div>
      <Tabs className="tabs">
        <TabList className="tabs__tablist">
          <Tab className="tabs__tab">胡志明市</Tab>
          <Tab className="tabs__tab">峴港市</Tab>
          <Tab className="tabs__tab">河內市</Tab>
        </TabList>

        <TabPanel className="tabs__tab-panel">
          
        </TabPanel>
        <TabPanel className="tabs__tab-panel">
        
        </TabPanel>
        <TabPanel>
          <h2>3rd City</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Hotels;
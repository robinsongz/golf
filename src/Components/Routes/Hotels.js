import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Hotels.scss';

function Hotels() {
  return (
    <div className='hotels'>
      <div className="hotels__header">
        <h1>Hotels</h1>
      </div>
      <Tabs className="tabs">
        <TabList className="tabs__tablist">
          <Tab className="tabs__tab">Ho Chi Minh</Tab>
          <Tab className="tabs__tab">Saigon</Tab>
          <Tab className="tabs__tab">3rd City</Tab>
        </TabList>

        <TabPanel>
          <h2>Ho Chi Minh Hotels</h2>
        </TabPanel>
        <TabPanel>
          <h2>Saigon Hotels</h2>
        </TabPanel>
        <TabPanel>
          <h2>3rd City</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Hotels;
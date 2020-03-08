import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './GolfCourse.scss';

function GolfCourse() {
  return (
    <div className="golf-course">
      <div className="golf-course__header">
      <img src={require('../../Images/golf course.jpg')} alt="golf course" />
      </div>
      <Tabs className="tabs">
        <TabList className="tabs__tablist">
          <Tab className="tabs__tab">胡志明市</Tab>
          <Tab className="tabs__tab">峴港市</Tab>
          <Tab className="tabs__tab">河內市</Tab>
        </TabList>

        <TabPanel className="tabs__tab-panel">
          <img src={require('../../Images/hochiminhgolfcourse1.jpg')} className="golf-course__pic" alt="golf course" />
          <img src={require('../../Images/hochiminhgolfcourse2.jpg')} className="golf-course__pic" alt="golf course" />
          <img src={require('../../Images/hochiminhgolfcourse3.jpg')} className="golf-course__pic" alt="golf course" />
        </TabPanel>
        <TabPanel className="tabs__tab-panel">
        <img src={require('../../Images/dananggolfcourse1.jpg')} className="golf-course__pic" alt="golf course" />
          <img src={require('../../Images/dananggolfcourse2.jpg')} className="golf-course__pic" alt="golf course" />
        </TabPanel>
        <TabPanel>
          <h2>3rd City</h2>
        </TabPanel>
      </Tabs>
         
    </div>
  );
}

export default GolfCourse;
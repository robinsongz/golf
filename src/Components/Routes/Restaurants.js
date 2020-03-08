import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Restaurants.scss';


function Restaurants() {
  return (
    <div className="restaurants">
        <div className="restaurants__header">
        <img src={require('../../Images/restaurant1.jpg')} alt="restaurant" />
      </div>
      <Tabs className="tabs">
        <TabList className="tabs__tablist">
          <Tab className="tabs__tab">胡志明市</Tab>
          <Tab className="tabs__tab">峴港市</Tab>
          <Tab className="tabs__tab">河內市</Tab>
        </TabList>

        <TabPanel className="tabs__tab-panel">
          <Tabs className="tabs-inner">
            <TabList className="tabs-inner__tablist">
              <Tab className="tabs-inner__tab">越南餐</Tab>
              <Tab className="tabs-inner__tab">海鮮餐</Tab>
              <Tab className="tabs-inner__tab">羊肉餐</Tab>
              <Tab className="tabs-inner__tab">粵式餐</Tab>
              <Tab className="tabs-inner__tab">法國餐</Tab>
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            越南餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            海鮮餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            羊肉餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            粵式餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            法國餐
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel className="tabs__tab-panel">
        <Tabs className="tabs-inner">
            <TabList className="tabs-inner__tablist">
              <Tab className="tabs-inner__tab">越南餐</Tab>
              <Tab className="tabs-inner__tab">海鮮餐</Tab>
              <Tab className="tabs-inner__tab">羊肉餐</Tab>
              <Tab className="tabs-inner__tab">粵式餐</Tab>
              <Tab className="tabs-inner__tab">法國餐</Tab>
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            越南餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            海鮮餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            羊肉餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            粵式餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            法國餐
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
        <Tabs className="tabs-inner">
            <TabList className="tabs-inner__tablist">
              <Tab className="tabs-inner__tab">越南餐</Tab>
              <Tab className="tabs-inner__tab">海鮮餐</Tab>
              <Tab className="tabs-inner__tab">羊肉餐</Tab>
              <Tab className="tabs-inner__tab">粵式餐</Tab>
              <Tab className="tabs-inner__tab">法國餐</Tab>
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            越南餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            海鮮餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            羊肉餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            粵式餐
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            法國餐
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Restaurants;
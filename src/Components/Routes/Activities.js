import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Activities.scss';

function Activities() {
  return (
    <div className="activities">
      <div className="activities__header">
        <img src={require('../../Images/activities1.jpg')} alt="attractions" />
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
              <Tab className="tabs-inner__tab">KTV</Tab>
              <Tab className="tabs-inner__tab">油壓</Tab>
              <Tab className="tabs-inner__tab">按摩</Tab>
              <Tab className="tabs-inner__tab">洗頭、修臉、剪指甲、刮腳皮</Tab>
              
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            KTV
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            油壓
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            按摩
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            洗頭、修臉、剪指甲、刮腳皮
            </TabPanel>
           
          </Tabs>
        </TabPanel>
        <TabPanel className="tabs__tab-panel">
        <Tabs className="tabs-inner">
            <TabList className="tabs-inner__tablist">
              <Tab className="tabs-inner__tab">KTV</Tab>
              <Tab className="tabs-inner__tab">油壓</Tab>
              <Tab className="tabs-inner__tab">按摩</Tab>
              <Tab className="tabs-inner__tab">洗頭、修臉、剪指甲、刮腳皮</Tab>
              
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            KTV
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            油壓
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            按摩
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            洗頭、修臉、剪指甲、刮腳皮
            </TabPanel>
           
          </Tabs>
        </TabPanel>
        <TabPanel>
        <Tabs className="tabs-inner">
            <TabList className="tabs-inner__tablist">
              <Tab className="tabs-inner__tab">KTV</Tab>
              <Tab className="tabs-inner__tab">油壓</Tab>
              <Tab className="tabs-inner__tab">按摩</Tab>
              <Tab className="tabs-inner__tab">洗頭、修臉、剪指甲、刮腳皮</Tab>
              
            </TabList>

            <TabPanel className="tabs-inner__tab-panel">
            KTV
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            油壓
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            按摩
            </TabPanel>
            <TabPanel className="tabs-inner__tab-panel">
            洗頭、修臉、剪指甲、刮腳皮
            </TabPanel>
           
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Activities;
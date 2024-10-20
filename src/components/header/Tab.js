import React, { useState } from 'react';
import sportsData from './data/sportsData.json';
import ButtonGroup from './ButtonGroup';
import SportContent from './SportContent';
import Table from '../table/Table';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [activeSport, setActiveSport] = useState(sportsData.sports[activeTab]);
  const [activeDetails, setActiveDetails] = useState(null);

  const tabChange = (idx, sport) => {
    setActiveTab(idx);
    setActiveSport(sport);
    setActiveButton(null);
    setActiveDetails(null);
  };

  const buttonChange = (idx, details) => {
    setActiveButton(idx);
    setActiveDetails(details);
  };

  return (
    <>
      <ButtonGroup
        sports={sportsData.sports}
        activeTab={activeTab}
        onTabChange={tabChange}
      />
      {activeSport && (
        <SportContent
          content={activeSport.content}
          activeButton={activeButton}
          onButtonChange={buttonChange}
        />
      )}
      {activeDetails && <Table details={activeDetails} />}
    </>
  );
};

export default Tab;



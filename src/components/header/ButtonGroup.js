import React from 'react';
import Button from '../buttons/Button';

const ButtonGroup = ({ sports, activeTab, onTabChange }) => {
  return (
    <div>
      {sports.map((sport, idx) => (
        <Button
          key={idx}
          idx={idx}
          sport={sport}
          activeTab={activeTab}
          tabChange={onTabChange}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;

import React from 'react';

const SportContent = ({ content, activeButton, onButtonChange }) => {
  return (
    <div className='btn-container'>
      {content.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => onButtonChange(idx, btn.details)}
          className={activeButton === idx ? 'active' : ''}
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
};

export default SportContent;

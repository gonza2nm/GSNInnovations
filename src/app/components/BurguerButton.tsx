import React from 'react';
import '@/app/styles/menu.css';
type Props = {};

const BurguerButton = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <div className="frame" onClick={handleClick}>
      <div className="center">
        <div className={isOpen ? 'menu_icon active' : 'menu_icon'}>
          <div className="line_1"></div>
          <div className="line_2"></div>
          <div className="line_3"></div>
        </div>
      </div>
    </div>
  );
};

export default BurguerButton;

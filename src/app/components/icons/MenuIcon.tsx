import React from 'react';

const MenuIcon = ({ isOpen, open }: { isOpen: boolean; open: () => void }) => {
  return (
    <svg
      onClick={open}
      className={isOpen ? 'modificar' : 'modificar'}
      width="38px"
      height="38px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;

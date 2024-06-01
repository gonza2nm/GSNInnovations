import React from 'react';

const MenuIcon = ({
  open,
  className,
}: {
  open: () => void;
  className: string;
}) => {
  return (
    <svg
      className={className}
      onClick={open}
      width="38px"
      height="38px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;

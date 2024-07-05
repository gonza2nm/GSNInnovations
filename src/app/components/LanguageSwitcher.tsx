import React from 'react';

const Switch = ({
  isOn,
  handleToogle,
  notCheckedString,
  checkedString,
}: {
  isOn: boolean;
  handleToogle: () => void;
  notCheckedString: string;
  checkedString: string;
}) => {
  return (
    <div>
      <p>{notCheckedString}</p>
      <input checked={isOn} onChange={handleToogle} type="checkbox" />
      <p>{checkedString}</p>
    </div>
  );
};

export default Switch;

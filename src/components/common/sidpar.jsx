import React from 'react';

const SidPar = (props) => {
  const { itemSidPar, onItemSidPar, selectedItems } = props;

  return (
    <ul className="list-group">
      {itemSidPar.map((itemSid) => (
        <li
          key={itemSid._id}
          className={selectedItems === itemSid ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemSidPar(itemSid)}
        >
          {itemSid.name}
        </li>
      ))}
    </ul>
  );
};

export default SidPar;

import React from 'react';

const ItemOrder = ({ name, priceFinal, count }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>
        S/.
        {priceFinal * count}
      </td>
    </tr>
  );
};

export default ItemOrder;

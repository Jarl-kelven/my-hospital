import React from 'react';

const ItemList = ({ info }) => {
  return (

    <div>




      {info.map((item) => (
    <ul>


        <li key={item.name}>{item.name}</li>


    </ul>

      ))}

    </div>
  );
};

export default ItemList;

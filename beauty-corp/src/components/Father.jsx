import React, {useState} from 'react';
import Header from './Header';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

const Father = () => {

  const [type, setType] = useState();

  return (
  <>
    <Header setType={setType} />
    <Home type={type} />
  </>)
};

export default Father;

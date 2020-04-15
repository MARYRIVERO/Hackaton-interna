import React from 'react';
import firebase from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ItemProduct from '../components/ItemProduct';
import { useState } from 'react';

const Home = () => {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const sendToCart = (obj, name) => {
    let arrayId = arrayProducts.filter(el => el.name === name)
    if (arrayId.length === 0) {
      const product = {
        count: 1,
        name: obj.name,
        priceFinal: obj.priceFinal,
        imgUrl: obj.imgUrl,
      }
      const newArr = arrayProducts.concat([product]);
      setArrayProducts(newArr);
    }
  };
  console.log(arrayProducts);
  localStorage.setItem('arrayProducts', JSON.stringify(arrayProducts));
  
  return (
    <div>
      <section>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span> Loading...</span>}
        {value && (
          <ul>
            {value.docs.map((doc, i) =>
              <ItemProduct key={i} obj={doc.data()} sendToCart={sendToCart} />
            )}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;

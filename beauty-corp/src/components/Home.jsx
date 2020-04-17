import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ItemProduct from '../components/ItemProduct';
import ItemBaner from '../components/ItemBaner';
import ItemCarruselOfferst from '../components/ItemCarruselOfferts'
import ItemFooter from './ItemFooter';


const Home = ({ type, category }) => {
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
    <section>
      <section className= "Home-body">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {value && (
        <section>
        {value.docs.filter(doc => (!type || (type && doc.data().brand === type)) && 
        (!category || (category && doc.data().category === category)))
          .map(doc =>
            <ItemProduct key={doc.id} obj={doc.data()} sendToCart={sendToCart} />
          )}
        </section>
      )}
      <section>
        <ItemBaner/>
      </section>
      <section>
        <ItemCarruselOfferst/>
      </section>
      </section>
      <footer>
      <ItemFooter/>
      </footer>
      
     
      
    </section>
  );
};

export default Home;


import React, { useState } from 'react';
import firebase from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ItemProduct from '../components/ItemProduct';
import ItemBaner from '../components/ItemBaner';
import ItemCarruselOfferst from '../components/ItemCarruselOfferts'
import ItemFooter from './ItemFooter';
import Search from './Search';


const Home = ({ type, category, show, search, setSearch  }) => {

  const [arrayProducts, setArrayProducts] = useState([]);
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [value1] = useCollection(
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
  localStorage.setItem('arrayProducts', JSON.stringify(arrayProducts))

  const searching = (e, search, setSearch, value) => {
    setSearch(e.target.value);
    if(search && search.length >= 1){
      // let word = search.toUpperCase();
      // let result = value.docs.data().filter(doc => (doc.data().name === word))
      // return result;
      console.log(search);
    }
  }
  return (
    <section>
      <div className="col-12">
          {show &&
              <Search search={search} setSearch={setSearch} searching={searching}/>
          }
      </div>
      <section className= "Home-body">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Loading...</span>}
      {(value && !search) && (
        <section>
        {value.docs.filter(doc => (!type || (type && doc.data().brand === type)) && 
        (!category || (category && doc.data().category === category)))
          .map(doc =>
            <ItemProduct key={doc.id} obj={doc.data()} sendToCart={sendToCart} />
          )}
        </section>
      )}
        {(value1 && search) && (
        <section>
        {value1.docs.filter(doc => (doc.data().name.indexOf(search.toUpperCase()) !== -1))
          .map(doc =>
            <ItemProduct key={doc.id} obj={doc.data()} sendToCart={sendToCart} />
          )}
        </section>
      )}
      </section>
      <ItemFooter/>
    </section>
    
  );
};

export default Home;

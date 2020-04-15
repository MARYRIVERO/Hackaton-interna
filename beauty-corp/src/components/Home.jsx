import React from 'react';
import firebase from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ItemProduct from '../components/ItemProduct';

const Home = () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  return (
    <div>
      <section>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span> Loading...</span>}
        {value && (
          <ul>
            {value.docs.map((doc, i) =>
              <ItemProduct key={i} obj={doc.data()} />
            )}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;

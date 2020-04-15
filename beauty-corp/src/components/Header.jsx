// import React, { useState } from 'react';
// import firebase from '../firebase/firebase';
// import { useCollection } from 'react-firebase-hooks/firestore';
// import ItemProduct from './ItemProduct';

// /* import imgSearch from '../img/search-engine.png';
// import imgUser from '../img/user.png';
// import imgPurse from '../img/purse.png'; */

// const Header = () => {
//   const [value, loading, error] = useCollection(
//     firebase.firestore().collection('products'),
//     {
//       snapshotListenOptions: { includeMetadataChanges: true },
//     }
//   );

//   const [type, setType] = useState();

//   return (
//     <section>
//         {error && <strong>Error: {JSON.stringify(error)}</strong>}
//         {loading && <span> Loading...</span>}
//         {value && (
//           <header>
//           <section>
//             <button type="button" className="" onClick={() => setType('Esika')}>Esika</button>
//             <button type="button" className="" onClick={() => setType('Cyzone')}>Cyzone</button>
//             <button type="button" className="" onClick={() => setType('LBel')}>LBel</button>

//           </section>
//           <section>
//             <nav>
//               <h3>Belcorp</h3>
//               <div>
//                 <img /* src={imgSearch}  */ alt="" />
//                 <img /* src={imgUser} */ alt="" />
//                 <img /* src={imgPurse} */ alt="" />
//               </div>
//             </nav>
//           </section>    
//           <section>
//           {value.docs.filter(doc => doc.data().brand === type)
//             .map(doc =>
//               <ItemProduct key={doc.id} obj={doc.data()} />
//             )}
//           </section>
//           </header>
//         )};

//     </section>
//   )
// }

// export default Header;

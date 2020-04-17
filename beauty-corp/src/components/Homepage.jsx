import React from 'react';
import ItemBaner from './ItemBaner';
import ItemCarruselOfferst from './ItemCarruselOfferts'
import ItemFooter from './ItemFooter'
const Homepage = () => {
return(
    <main className= "main-homepage">
    <section>
        <ItemBaner/>
      </section>
      <section>
        <ItemCarruselOfferst/>
      </section>
      <footer>
      <ItemFooter/>
      </footer>
    </main>
)
};
export default Homepage;
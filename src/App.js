import React from 'react';
import './App.scss';
import Home from './components/Home'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEnvelope, faKey, faShoppingCart, faBook, faTimes, faArrowRight, faSignInAlt, faUserPlus, faCheck, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

library.add( faPlus, faEnvelope, faKey, faShoppingCart, faBook, faTimes, faArrowRight, faSignInAlt, faUserPlus, faCheck, faAngleDoubleRight, faAngleDoubleLeft);




const App = () => {
  return (
    <Home />
  );
}

export default App;







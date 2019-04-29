import React, {Suspense} from 'react';
import Spinner from 'react-spinkit';
import NavBar from '../navbar';
import ServiceAlert from '../error';
import Footer from '../footer';
import AppRouter from '../router';
import AppLoader from '../loader';

const App = ()=> (
  <Suspense
    fallback={
      <div className={'spinner-container'}>
        <Spinner name={'line-scale-pulse-out'} className={'spinner'} />
      </div>
    }
  >
    <AppLoader />
    <NavBar />
    <ServiceAlert />
    <AppRouter />
    <Footer />
  </Suspense>
);

export default App;

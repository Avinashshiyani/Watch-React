import React from 'react';
import Links from './Components/Links/Links';
import Navbar from './Components/Navbar/Navbar';
import NewArrival from './Components/NewArrival/NewArrival';
import PerfectStyle from './Components/PerfectStyle/PerfectStyle';
import PopularItems from './Components/PopularItems/PopularItems';
import SecurePayment from './Components/SecurePayment/SecurePayment';
import WatchChoice from './Components/WatchChoice/WatchChoice';

const App = () => {
  return (
    <>
      <Navbar />
      <PerfectStyle />
      <NewArrival />
      <PopularItems />
      <WatchChoice />
      <SecurePayment />
      <Links />
    </>
  )
}

export default App;
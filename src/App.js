import './App.css';
// import { Button } from 'reactstrap';
import Homepage from './Homepage';
import { Routes, Route } from 'react-router-dom';
import HomepageKor from './HomepageKor';
import DirectionsEng from './components/DirectionsEng';
import DirectionsKor from './components/DirectionsKor';
import LayoutKor from './LayoutKor';
import Layout from './Layout';
import Reservation from './components/Reservation';
import ReservationKor from './components/ReservationKor';
import { ProductProvider } from './components/ProductContext';
import Cart from './components/Cart';
import CartKor from './components/CartKor';

function App() {
  return (
    <>
    <ProductProvider>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/directions' element={<DirectionsEng />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
          <Route path='/kr' element={<LayoutKor />} >
            <Route index element={<HomepageKor/>} />
            <Route path='/kr/directions' element={<DirectionsKor />} />
            <Route path='/kr/reservation' element={<ReservationKor />} />
            <Route path='/kr/cart' element={<CartKor />} />
          </Route>
      </Routes> 
    </ProductProvider>    
    </>
  );
}

export default App;
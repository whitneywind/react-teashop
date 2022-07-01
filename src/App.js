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

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/directions' element={<DirectionsEng />} />
            <Route path='/reservation' element={<Reservation />} />
          </Route>
          <Route path='/kr' element={<LayoutKor />} >
            <Route index element={<HomepageKor/>} />
            <Route path='/kr/directions' element={<DirectionsKor />} />
            <Route path='/kr/reservation' element={<ReservationKor />} />
          </Route>
      </Routes>     
    </>
  );
}

export default App;
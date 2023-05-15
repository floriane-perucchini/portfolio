import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
import './style.scss';
import TechnosContainer from './TechnosContainer';
import Realisations from './Realisations';
import { Routes, Route } from 'react-router-dom';
import Presentation from './Presentation';
import UpButton from './UpButton';

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
  <div className={`App ${darkMode}`}>
    <UpButton />

    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Presentation />
            <TechnosContainer />
            <Realisations />
          </>
        } 
      />
      {/* <Route path="/technos" element={<TechnosContainer />} />
      <Route path="/realisations" element={<Realisations />} /> */}

      {/* <Route path='*' element={<NotFound />}> */}
    </Routes>

    {/* <Footer /> */}

  </div>
  );
}

export default App;

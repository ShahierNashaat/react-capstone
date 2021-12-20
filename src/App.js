import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getCountries from './redux/thunk/countries';
import Countries from './components/countries/Countries';
import Regions from './components/regions/Regions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:id" element={<Regions />} />
      </Routes>
    </Router>
  );
}

export default App;

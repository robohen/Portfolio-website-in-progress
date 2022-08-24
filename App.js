import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Layout from '../assets/components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes>
    </>
  );
}

export default App;

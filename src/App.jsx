import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tanaman from './Tanaman';
import GenBarcode from './GenBarcode';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanaman/:slug" element={<Tanaman />} />
          <Route path="/gen-barcode" element={<GenBarcode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

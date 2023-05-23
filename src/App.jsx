import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tanaman from './Tanaman';
import { Suspense, lazy } from 'react';
const GenBarcode = lazy(() => import('./GenBarcode'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanaman/:slug" element={<Tanaman />} />
          <Route
            path="/gen-barcode"
            element={
              <Suspense fallback={<span>Loading...</span>}>
                <GenBarcode />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

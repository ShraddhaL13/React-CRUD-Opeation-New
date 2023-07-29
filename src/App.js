import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cruddata from './Cruddata';
import Empcreate from './Empcreate';
import './App.css';
import Empedit from './Empedit';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cruddata />} />
          <Route path='/empdata/:empid' element={<Empedit />} />
          {/* <Route path='/empdata' element={<Empedit />} /> */}

          <Route path='/empadd' element={<Empcreate />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

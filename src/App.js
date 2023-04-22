import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

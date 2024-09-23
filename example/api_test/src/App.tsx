import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import ApiTest from './client/ApiTest';
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api_test" element={<ApiTest />} />
      </Routes>
    </div>
    )
}
/*
*/
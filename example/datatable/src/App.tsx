import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import DataTable from './client/DataTable';
import Test1 from './client/Test1';
import Test2 from './client/Test2';

//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </div>
    )
}
/*
*/
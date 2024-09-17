import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import AlertDialog from './client/AlertDialog';
import Button from './client/Button';
import Card from './client/Card';
import Calendar from './client/Calendar';
import CheckBox from './client/CheckBox';
import DataTable from './client/DataTable';
import DatePicker from './client/DatePicker';
import Dialog from './client/Dialog';
import Form from './client/Form';
import Input from './client/Input';
import NavigationMenu from './client/NavigationMenu';
import Progress from './client/Progress';
import Radio from './client/Radio';
import Select from './client/Select';
import Sheet from './client/Sheet';
import Switch from './client/Switch';
import Table from './client/Table';
import TextArea from './client/TextArea';
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
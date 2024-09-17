import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import AlertDialog from './client/AlertDialog';
import Button from './client/Button';
import Card from './client/Card';
import Calendar from './client/Calendar';
import CheckBox from './client/CheckBox';
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
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alert_dialog" element={<AlertDialog />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/datepicker" element={<DatePicker />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/form" element={<Form />} />
        <Route path="/input" element={<Input />} />
        <Route path="/navigation_menu" element={<NavigationMenu />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/select" element={<Select />} />
        <Route path="/sheet" element={<Sheet />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/table" element={<Table />} />
        <Route path="/textarea" element={<TextArea />} />
        
      </Routes>
    </div>
    )
}
/*
*/
//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about" className="ms-2">&nbsp; [ about ]</a>
        <a href="/list_test" className="ms-2"> [ ListTest ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
<a href="/data_table_test1" className="ms-2"> [ dataTableTest1 ]</a>
<a href="/data_table_test2" className="ms-2"> [ dataTableTest2 ]</a>
*/
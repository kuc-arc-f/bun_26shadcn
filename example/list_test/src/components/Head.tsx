//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about" className="ms-2">&nbsp; [ about ]</a>
        <a href="/data_table_test1" className="ms-2"> [ dataTableTest1 ]</a>
        <a href="/data_table_test2" className="ms-2"> [ dataTableTest2 ]</a>
        <br />
        <a href="/list_test" className="ms-2"> [ ListTest ]</a>
        <a href="/list_test2" className="ms-2"> [ ListTest2 ]</a>
        <a href="/list_test6" className="ms-2"> [ ListTest6 ]</a>
        <a href="/todo" className="ms-2"> [ Todo ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
*/
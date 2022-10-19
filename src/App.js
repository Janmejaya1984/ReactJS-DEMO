import logo from './logo.svg';
import './App.css';
import React from 'react';

import HeaderComponent from './components/HeaderComponent';

import ContentComponent from './components/ContentComponent';

function App() {
  const employeesArr = [
    {
      id:101,
      name:"John",
      dept:"IT",
      desg:"Manager"
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      desg:"Manager"
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      desg:"ASST Manager"
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      desg:"Developer"
    }
  ];
  /*return (
    <div className="App">
      <HeaderComponent name="Employee Management System"></HeaderComponent>
      <ContentComponent employees={employeesArr}></ContentComponent>
     
    </div>
  );*/

    return React.createElement("h1", {}, "Hello World!!!");


}

export default App;

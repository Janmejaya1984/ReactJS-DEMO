import logo from './logo.svg';
import './App.css';
import React from 'react';

import HeaderComponent from './components/HeaderComponent';

import ContentComponent from './components/ContentComponent';
import ProductComponent from './components/ProductComponent';
import ButtonComponent from './components/ButtonComponent';
import Button from 'react-bootstrap/Button';
import SimpleAccordion from './components/materialComponents/SimpleAccordion';
import CounterCompoent from './components/CounterComponent';
import CounterFunctionalComponent from './components/CounterFunctionalComponent';
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
  const employeesArr1 = [
    {
      id:101,
      name:"John",
      dept:"IT",
      isMarried:false
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      isMarried:false
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      isMarried:false
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      isMarried:false
    }
  ];
  return (
    <div className="App">
    {/* <button className="button">Submit</button>

      <HeaderComponent name="Employee Management System"></HeaderComponent>
      
      <ButtonComponent/>
      <ProductComponent/>
      <ContentComponent employees={employeesArr}></ContentComponent>
  */}

<CounterFunctionalComponent/>
<hr/>

  <CounterCompoent employees={employeesArr1}/>
  <SimpleAccordion/>
    </div>
  );

    //return React.createElement("h1", {}, "Hello World!!!");


}

export default App;

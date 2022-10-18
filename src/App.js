import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
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
  return (
    <div className="App">
      <HeaderComponent name="E-Commerce"></HeaderComponent>
      <ContentComponent employees={employeesArr}></ContentComponent>
     <FooterComponent copyright="bapun00@gmail.com" company="mycompany.com"></FooterComponent>
    </div>
  );
}

export default App;

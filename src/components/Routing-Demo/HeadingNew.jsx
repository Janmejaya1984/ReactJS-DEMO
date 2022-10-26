import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import PageNotFound from './PageNotFound';
import LoginClassComponent from './LoginClassComponent';
import NewHome from './NewHome';
class HeadingNew extends React.Component {
    render(){
  return (
    <div>
<BrowserRouter>

<Routes>
<Route path="*" element={<PageNotFound/>}/>
    <Route path="/" element={<LoginClassComponent/>}>
       {/* <Route path="landing/:name/*" element={<Landing/>}/>*/}
     </Route>
     <Route path="/home" element={<NewHome/>}/>
     
</Routes>
</BrowserRouter>
    </div>
  )
}
}

export default HeadingNew
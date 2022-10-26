import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Login from './Login';
function Heading() {
  return (
    <div>
<BrowserRouter>

<Routes>
<Route path="*" element={<PageNotFound/>}/>
    <Route path="/" element={<Login/>}>
       {/* <Route path="landing/:name/*" element={<Landing/>}/>*/}
     </Route>
     <Route path="landing/:name/*" element={<Landing/>}/>
     
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Heading
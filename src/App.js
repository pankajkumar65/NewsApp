import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {

 const  apikey ="1c1a8887bc5d4f6db22410b77dbfdf59";
 

const [progress,setProgress]=useState(0);

  const setprogress=(progress)=>{
     return setProgress(progress);
  }
   
  
    return (
       <div>
      <Router>
       <Navbar />
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
      
         <Routes>
              <Route path="/"element={<News  setprogress= {setprogress} apikey={apikey} key=""pageSize={6} country={"in"} category={"business"} />}></Route>
              <Route path="/entertainment"element={<News  setprogress= {setprogress} apikey={apikey} key="entertainment" pageSize={6} country={"in"} category={"entertainment"}/>}></Route>
              <Route path="/business"element={<News  setprogress= {setprogress} apikey={apikey} key="business" pageSize={6} country={"in"} category={"business"}/>}></Route>
              <Route path="/general"element={<News  setprogress= {setprogress} apikey={apikey} key="general" pageSize={6} country={"in"} category={"general"}/>}></Route>
              <Route path="/health"element={<News  setprogress= {setprogress} apikey={apikey}  key="health" pageSize={6} country={"in"} category={"health"}/>}></Route>
              <Route path="/science"element={<News  setprogress= {setprogress} apikey={apikey} key="science" pageSize={6} country={"in"} category={"science"}/>}></Route>
              <Route path="/sports"element={<News  setprogress= {setprogress} apikey={apikey} key="sports" pageSize={6} country={"in"} category={"sports"}/>}></Route>
              <Route path="/technology"element={<News  setprogress= {setprogress} apikey={apikey} key="technology" pageSize={6} country={"in"} category={"technology"}/>}></Route>
         </Routes>
      </Router>
       </div>
    )
  }
  export default App;
 

 

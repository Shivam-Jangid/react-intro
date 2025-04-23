import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"

function App() {
  return <div>


    <BrowserRouter>
    <Link to='/class-12'> Class 12</Link>
    <Link to='/class-11'>Class 11</Link>
    <Routes>
    <Route path="/" element ={<div>Landing page</div>}  ></Route>


      <Route path="/class-11" element =  {<div>class 11</div>}></Route>
      <Route path="/class-12" element = {<Class12Program/>} ></Route>
      <Route path="*" element={<ErrorPage/>}></Route>


    </Routes>
    </BrowserRouter>

  
  </div>
}

function Class12Program(){
  const nav = useNavigate();
  function navigateToClass11(){
    nav('/class-11')
  }
  return <div >
    hi there
    <button onClick={navigateToClass11}>Click to go to class 11</button>
  </div>
}
function ErrorPage(){
  const nav = useNavigate();
  function homeNav(){
    nav('/');
  }
  return <div>
    page not found , Go to 
    <button onClick={homeNav}>home</button>
  </div>
}
export default App

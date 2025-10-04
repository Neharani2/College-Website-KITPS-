
import About from './about';

import './App.css';

import './project.css';
import Dashboard from "./dashboard";
import Nav from "./nav";
import { BrowserRouter, Routes,Route, Form } from "react-router-dom";
import Student from "./student";


import Contact from "./contact";

import Home from './home';

import Carousels from './studentcarousel';

// import Scholarship from './scholarship';

import Project from './project';
import Library from './library';
import Faculty from './teacher';
import Insitution from './institution';
import Civil  from './Departments/civilengineer';
import Cse from './Departments/cse';
import Ece from './Departments/ece';
import Ite from './Departments/information';
import Mechanical from './Departments/mechanical';
import Insitute from './Departments/insitute';
import Mission from './Departments/mission$vission';
import Culture from './Departments/culture';
import Society from './Departments/studentsociety';
import Sports from './Departments/sports';
import Hostal from './Departments/hostel';
import Facilities from './Departments/facilities';

import Part1 from './Departments/1carouselspart';
import Footer from './Departments/footer';



import Scholarship from './scholarship';
import Fees from './Departments/Fees';
import Moli from './Moli';


import Signup from './Departments/formsignup';
import Placementcell from './Departments/placementcell';
import Login from './Departments/Login';


















// import Slider from './slider';








const App =()=> {
  return(
<>



<BrowserRouter>
<Nav/>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/student' element={<Student/>}/>
<Route path='/faculty' element={<Faculty/>}/>

<Route path='/contact' element={<Contact/>}/>
{/* <Route path='/slider' element={<Slider/>}/> */}


<Route path='/Carousels' element={<Carousels/>}/>
<Route path='/project' element={<Project/>}/>
<Route path='/library' element={<Library/>}/>
<Route path='/faculty' element={<Faculty/>}/>
<Route path='/insitution' element={<Insitution/>}/>
<Route path='/civil' element={<Civil />}/>
<Route path='/cse' element={<Cse/>}/>
<Route path='/ece' element={<Ece/>}/>
<Route path='/ite' element={<Ite/>}/>
<Route path='/mechanical' element={<Mechanical/>}/>
<Route path='/insitute' element={< Insitute/>}/>
<Route path='/mission' element={< Mission/>}/>
<Route path='/culture' element={< Culture/>}/>
<Route path='/society' element={<Society/>}/>
<Route path='/sports' element={<Sports/>}/>
<Route path='/hostal' element={<Hostal/>}/>
<Route path='/facilities' element={<Facilities/>}/>


{/* <Route path='/firebase' element={<Firebase/>}/> */}

<Route path='/fees' element={<Fees/>}/>
<Route path='/moli' element={<Moli/>}/>
<Route path='/signup' element={<Signup/>}/>
  <Route path="/login" element={<Login />} />
<Route path='/placementcell' element={<Placementcell/>}/>












<Route path='/scholarship' element={<Scholarship/>}/>










<Route path='/part1' element={<Part1/>}/>






</Routes>

<Footer/>

</BrowserRouter>




</>

  );

}
export default App;
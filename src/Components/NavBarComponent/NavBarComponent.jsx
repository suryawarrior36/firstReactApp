import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CounterPageComponent from '../../routes/CounterPageComponent/CounterPageComponent'
import DataPageComponent from '../../routes/DataPageComponent/DataPageComponent'
import HomePageComponent from '../../routes/HomePageComponent/HomePageComponent'

const NavBarComponent = () => {
  return (
    <Router>
    <nav>
     <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/counter'>Counter</Link>
       </li>
       <li>
         <Link to='/data'>Data</Link>
       </li>
     </ul>
    </nav>
   <Routes>
     <Route exact path='/' element={<HomePageComponent/>}></Route>
     <Route exact path='/counter' element={<CounterPageComponent/>}></Route>
     <Route exact path='/data' element={<DataPageComponent/>}></Route>
   </Routes>
   </Router>
  )
}

export default NavBarComponent
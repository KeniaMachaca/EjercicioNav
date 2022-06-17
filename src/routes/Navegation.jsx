import React from 'react'
import {BrowserRouter, Routes,Route, NavLink, Navigate} from 'react-router-dom'
import { About } from '../components/About'
import { Dashboard } from '../components/Dashboard'
import { Home } from '../components/Home'

function Navegation() {
  return (
      <BrowserRouter>
      <nav className='nave'> 
          <ul>
              <li>
                  <NavLink to='/home' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/about' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  About
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/dashboard' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Dashboard
                  </NavLink>
              </li>
          </ul>
      </nav>
    
        <Routes>
          <Route path='about' element={<About/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='/*' element={<Navigate to='/home/' replace/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export {Navegation}

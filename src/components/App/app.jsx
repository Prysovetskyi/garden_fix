import React from 'react'
import Nav from '../Nav/nav'
import s from './index.css'
import Footer from '../Footer/footer'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../../Pages/MainPage/mainpage'
import BasketPage from '../../Pages/BasketPage/basketpage'
import AllProducts from '../../Pages/AllProducts/allproducts'
import AllSales from '../../Pages/AllSales/allsales'


export default function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/allsales' element={<AllSales/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

import React from 'react'
import logo from '../media/logo.png'
import basket from '../media/basket.png'
import catalog from '../media/catalog_img.png'
import s from './style.module.css'
import Container from '../UI/Container/container'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Container className={s.container}>
        <Link className={s.logo} to='/'>
          <img src={logo} alt='green leaf' to='/'/>
          <img src={catalog} alt='green leaf'/>
        </Link>

        <div></div>
        
        <div className={s.nav_btn}>
          <a href='/'>Main page</a>
          <a href='/allproducts' >All Product</a>
          <a href='/allsales' >Allsales</a>
        </div>

        <a className={s.basket} href='/basket'>
          <img src={basket} alt='green leaf' />
        </a>
      </Container>
    </nav>
  )
}

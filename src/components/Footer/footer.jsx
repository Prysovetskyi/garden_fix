import React from 'react';
import Container from '../UI/Container/container';
import image from '../media/google_maps.png';
import instagram from '../media/instagram.png';
import whatsapp from '../media/whatsapp.png';
import s from './style.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <div>
          <p>Contact</p>
          <p className={s.tel_nummer}>+49 999 999 99 99</p>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>

        <div className={s.adress}>
          <p>Address</p>
          <p>Linkstraße 2, 8th Floor, 10785, Berlin, Germany</p>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
        </div>
    <div className={s.google_maps}>
            <img src={image} alt="google_maps" />
    </div>
      </Container>
    </footer>
  );
}

import React from 'react';
import './styles.css';
import { Layout } from "./App";

function Contact() {
  return (
    <>
    <Layout />
    <h3>อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี</h3>
      <div className='card'>
        <Avatar />
        <div className='date'>
          <Intro />
        
        </div>
      </div>
    </>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายกิตติพัฒน์ สายแก้ว</h1>
      <p>
        6611460103 ICT
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="pc.jpg" alt='My Avatar' />;
}


export default Contact;
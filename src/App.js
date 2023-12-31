import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";
export function Layout() {
  return (
    <nav className="bg-warning p-2 mb-3 text-left">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3>
        อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภุมิปัญญาท้องถิ่นของจังหวัดอบุลราชธานี
      </h3>
    </>
  );
}

function Product() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [product1] = useState(800);
  const [product2] = useState(450);
  const [product3] = useState(500);

  const table = useRef();

  return (
    <>
      <Layout />
      <h3>
        อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี
      </h3>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนูอาหาร</th>
            <th>พลังงานที่ได้</th>
            <th>เลือกเมนูนี้</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>เมี่ยงคำกลีบบัวหลวงแบบโบราณ</td>
                <td>{product1}</td>
                <td>
                  <Button variant="primary" 
                  onClick={()=> {
                  setTotalPrice(totalPrice + product1);
                  }}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
              <tr>
                <td>ปลาส้มทรงเครื่องสมุนไพร</td>
                <td>{product2}</td>
                <td>
                  <Button variant="primary" 
                  onClick={()=> {
                  setTotalPrice(totalPrice + product2);
                  }}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
              <tr>
                <td>หมี่กะทิ</td>
                <td>{product3}</td>
                <td>
                  <Button variant="primary" 
                  onClick={()=> {
                  setTotalPrice(totalPrice + product3);
                  }}>
                    เลือกเมนูนี้
                  </Button>
                </td>
              </tr>
        </tbody>
      </Table>
      <h4>พลังงานรวมที่ได้รับ {totalPrice} Kcal</h4>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

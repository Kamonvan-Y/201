import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './toptop.css';
import Nav from './Navbar';

import {Carousel} from 'react-bootstrap';

var stylesection = {
  width: "100%",
  height: "500",
}

class App extends Component {
  render() {
    return (
      <div>
        <div class="bg1">
          <Nav />
          
        </div>
        <Carousel>
  <Carousel.Item>
    <img width={1920} height={1080} alt="1920x1080" src="image/01.jpg" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1920} height={1080} alt="1920x1080" src="image/02.jpg" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1920} height={1080} alt="1920x1080" src="image/03.jpg" />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
        <section class="toptop" id="topna" >
        
<div class="image11" id="history">
        <img src="https://www.img.in.th/images/ecdbb4edee48125fe405abc0e0b19c78.png" alt="ecdbb4edee48125fe405abc0e0b19c78.png" border="0" />
</div>
        <div class="textg">
        <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid" src="image/12.jpg" alt=""/>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              
              <p>ไอศครีม มีต้นกำเนิดมาจากดินแดนในต่างประเทศทั้งนี้ได้แพร่กระจาย เข้ามาในประเทศไทย เมื่อสมัยรัชกาลที่ 5 ในสมัยนั้น  
ส่วนใหญ่จะใช้รับประทานกันภายในวังเป็นส่วนใหญ่ เนื่องจากไอศครีมเป็นอาหารหวานที่ทันสมัยหรืออาจจะเรียกได้ว่าเป็นนวัตกรรมใหม่  
ก็ว่าได้ใครได้ลองรับประทานไอศครีมในสมัยนั้นก็ถือว่าเป็นคนที่ก้าวล้ำนำสมัยไปโดยปริยาย</p>
            </div>
          </div>
        </div>
      </div>
      </div>

        </section>
        <section class="nun">
      
    </section>

        <section class="contactbg" id="contact">
      <div class="pro" id="product">
        <img class="img-fluid" src="image/pro.png" alt=""/> </div>
          <div class="textg">
          <img class="img-fluid" src="image/13.png" alt=""/>
          <img class="img-fluid" src="image/14.png" alt=""/>
          <img class="img-fluid" src="image/15.png" alt=""/>
      </div>

        </section>

        <section class="contactbg1" id="contact1">
        <div class="image11" id="taste">
        <img class="img-fluid" src="image/17.png" alt=""/> </div>
        <div class="textg">
        <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img class="img-fluid" src="image/05.png" alt=""/>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5"/>
              <h2 class="display-4">Fruit Ice Cream</h2>
              <p>ไอศกรีมผลไม้</p>
                <p>คือ ไอศกรีมที่ผสมผลไม้ต่างๆ เช่น</p>
              <p>ไอศกรีมสตรอเบอรี่</p>
            </div>
          </div>
        </div>
      </div>

        </section>

        <section class="contactbg1" id="contact12">
        <div class="textg">
        <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid" src="image/06.png" alt=""/>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Ice Milk</h2>
              <p>ไอศกรีมนม</p>
              <p>คือ ผลิตภัณฑ์นม ลักษณะคล้ายไอศกรีม</p> 
              <p>ไขมันต่ำ อาจแต่งสี กลิ่น หวานน้อย</p>
            </div>
          </div>
        </div>
      </div>
      </div>
 

        </section>
        <section class="contactbg1" id="contact1">
        <div class="image11" id="about"></div>
        <div class="textg">
        <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="p-5">
              <img class="img-fluid" src="image/07.png" alt=""/>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-5"/>
              <h2 class="display-4">Yohgurt Ice Cream</h2>
              <p>ไอศกรีมโยเกิร์ต</p>
              <p>มีส่วนผสมหลักคือไอศกรีมและโยเกิร์ต</p> 
              <p>ซี่งจะให้รสชาติหวานกลมกล่อมแบบไอศกรีม</p>
              <p>และเปรี้ยวเล็กนัอยแบบโยเกิร์ต</p>
            </div>
          </div>
        </div>
      </div>

        </section>
        <section class="contactbg1" id="contact1234">
          <div class="textg">
          <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="p-5">
              <img class="img-fluid" src="image/08.png" alt=""/>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="p-5">
              <h2 class="display-4">Ice Chocolate</h2>
              <p>ไอศกรีมช็อคโกแล็ต</p>
              <p>คือ ไอศกรีมที่ผสมผงโกโก้ หรือ</p>
              <p>ช็อกโกแล็ต อาจเจือสี แต่งกลิ่น</p>
            </div>
          </div>
        </div>
      </div>
      </div>

        </section>
        
        <section class="contactbg1" id="contact12345">

          <div class="textg" >
          <img class="img-fluid" src="image/icon.png" alt=""/>

      </div>

        </section>
      </div>



    );
  }
}


export default App;

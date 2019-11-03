import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import Background from './background';
import { Row, Col } from 'reactstrap';
import Navbar1 from './navbar';
const Row1 = styled.div`
        margin-left: 6%;
        margin-right: 6%;
        `;
const Img1 = styled.div`
        text-align:center;
`;
const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left: 1%;
        margin-right: 1%;
        background-color: white;
        border-radius: 30px;   
        padding : 5%;   
        font-weight : medium;
        font-size : 20px;
        text-align :center;
`;
const Text11="พะยูนมีลำตัวรูปกระสวยคล้ายปลาโลมา สีเทาอมชมพูหรือสีน้ำตาลหรือสีน้ำตาลเทา สีของส่วนท้องอ่อนกว่า วัยเด็กมีลำตัวสีเทาอมชมพูและส่วนท้องสีชมพู ส่วนหัวยาวประกอบด้วยปาก รูจมูก และมีลักษณะคล้ายริมฝีปากที่หนาและขนาดใหญ่เรียกรวมกันว่า MUZZLE มีขนสั้นๆประปรายตลอดลำตัวและขนเส้นใหญ่อยู่อย่างหนาแน่นบริเวณปาก ตาและหูขนาดเล็ก พะยูนหายใจทุกๆ 2-3 นาที มีครีบ (Flipper) มีหัวนม (Nipple) อยู่ด้านหลังของฐานครีบทั้งสองเพศ ในตัวเมียระยะโตเต็มวัยมีหัวนมใหญ่ชัดเจน (ความยาวประมาณ 3-5 เซนติเมตร) ส่วนในตัวผู้หัวนมเป็นเพียงตุ่มเล็กๆ ครีบทั้งสองข้างเปลี่ยนแปลงมาจากขาคู่หน้า ภายในครีบประกอบด้วยนิ้ว 5 นิ้ว ครีบทำหน้าที่ในการเปลี่ยนทิศทางการเคลื่อนที่และช่วยในการขุดหญ้าทะเล พะยูนว่ายน้ำโดยใช้การพัดโบกของครีบหาง";
export default class info extends React.Component{
    
    render(){
        return(
            <div>
            <Background/>
            <Navbar1/>
            <Row1>
                <Row>
                <Col md = "auto">
                <Img1>
                <img src ="/img/logo small.png"/>
                </Img1>
                </Col>
                <Col>
                <Text1>{Text11} </Text1>
                </Col>
                </Row>
            </Row1>
            
            </div>
        )
    }
}
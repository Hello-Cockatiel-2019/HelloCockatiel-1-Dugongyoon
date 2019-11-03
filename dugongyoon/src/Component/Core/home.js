import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import Background from './background';
import Navbar1 from './navbar';

export default class home extends React.Component{
    render(){
        return(
            <div>
            <Background/>
            <Navbar1/>
            <center>
                <img src ="/img/logo big.png" width="414px"/>
            </center>
            
            
            </div>
        )
    }
}
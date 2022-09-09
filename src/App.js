import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Eu from './Assents/eu.jpg'

import styled from "styled-components";

export const Div = styled.div`
    max-width: 400px;
    background-color: gray;
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    h2{
        color: yellowgreen;
    }
    span{
        color: gold;
    }
`

export default class App extends Component{
  state = {
    img:""
  }

  render(){
    return(
      <>
        <Div>
          <Header usuario={"Dados do usuário"}/>
        </Div>
        
        <Div>
          <Main nome={"Chales"} idade={18} tecnologia={"Java"}/>
        </Div>

        <Div>
          <Main nome={"Astrogildo"} idade={80} tecnologia={"Fortran"}/>
        </Div>
        
        <Div>
          <Footer dia={"09 de agosto de 2022"} />
        </Div>
        <Div>
          <button onClick={()=>this.setState({img:Eu})}>Ver imagem</button>      
        </Div>

        <Div>
          {<img src={this.state.img} alt="Minha imagem" />}
        </Div>
      </>
    )
  }
}
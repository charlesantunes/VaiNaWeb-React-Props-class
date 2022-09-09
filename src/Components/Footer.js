import React, { Component } from "react";

export default class Footer extends Component{
  render(){
    return(
      <>
        <h2>Data atual: <span>{this.props.dia}</span></h2>
         {this.props.children} {/*linha para ativar tag filha lá no App.js */}
      </>
    )
  }
}
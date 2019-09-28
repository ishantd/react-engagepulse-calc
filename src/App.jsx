import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton'
import { evaluate } from 'mathjs';
// import { toggleSc } from './togglesc'


// const GlobalStyle = createGlobalStyle `
// body {
//   background-color: ${props =>
//   props.theme.mode === 'dark' ? '#000' : '#fff'};
//   color: ${props =>
//   props.theme.mode === 'dark' ? '#fff' : '#000'};
// }
// .button-wrapper {
//   background-color: ${props =>
//   props.theme.mode === 'dark' ? '#666' : '#f0f0f0' };
//   color: ${props =>
//   props.theme.mode === 'dark' ? '#fff' : '#000'}
// }
// `

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      input: "0"
    };
  } 
  // {input: eval(this.state.input)}
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState( {input: evaluate(this.state.input)} )
  }

  handleAbs = () => {
    this.setState( {input: (-1)*this.state.input} )
  }

  handleSqrt = () => {
    this.setState( {input: parseInt(Math.sqrt(this.state.input))} )
  }

  handleSq = () => {
    this.setState( {input: this.state.input*this.state.input} )
  }

  
  render () {
    
    
    
    
    return (
      

      

      
      <div className="app">
        <div className="dl">
          <Button handleClick={  () =>  {
            var x = this.refs.row;
            if (document.body.style.backgroundColor === "black") {
              document.body.style.backgroundColor = "white";
            } else {
              // x.style.backgroundColor = "black";
              document.body.style.backgroundColor = "black";
            }
            
            if (x.style.backgroundColor === "white") {
              x.style.backgroundColor = "black"
              x.style.color = "white"
            }
            else {
              x.style.backgroundColor = "white"
              x.style.color = "black"
            }

          }
      }>Dark Mode/ Light Mode</Button>
          </div>
      <div className="calc-wrapper" >
        <Input input={this.state.input}></Input>
          <div className="row" id="row" ref="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row" id="row" ref="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row" id="row" ref="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row" id="row" ref="row">
          <Button handleClick={  () =>  {
            var x = this.refs.scrow;
            if (x.style.display === "none") {
              x.style.display = "flex";
            } else {
              x.style.display = "none";
            }
          }
    
                }>Scientific</Button>
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={()=>this.handleEqual()}>=</Button>
              <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="scrow" id="scrow" ref="scrow">
              <Button handleClick={()=>this.handleAbs()}>+/-</Button>
              <Button handleClick={()=>this.handleSq()}>x^2</Button>
              <Button handleClick={()=>this.handleSqrt()}>(x)^(1/2)</Button>
          </div>
          <div className="row" id="row" ref="row">
            <ClearButton handleClear={()=> this.setState({ input: '' })}>
              Clear
            </ClearButton>
          </div>
          
          
      </div>
    </div>

    
  ); // Return
}

}
export default App;

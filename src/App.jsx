import React from 'react';
import './App.scss';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';

class App extends React.Component{
  state = {
    input: ''
  }

  addToInput = (value) => {
    this.setState({
      input: this.state.input + value
    })
  }
  
  handleClear = () => {
    this.setState({
      input: ''
    })
  }

  handleEqual = () => {
    this.setState({
      input: eval(this.state.input)
    })
  }

  render(){
    return (
      <div className="app">
        <div className='calc-wrapper'>
          <Input input={this.state.input}/>
          <div className='row'>
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.addToInput}>*</Button>
          </div>
          <div className='row'>
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.addToInput}>+</Button>
          </div>  
          <div className='row'>
            <Button handleClick = {this.addToInput}>.</Button>
            <Button handleClick = {this.addToInput}>0</Button>
            <Button handleClick = {this.handleEqual}>=</Button>
            <Button handleClick = {this.addToInput}>-</Button>
          </div>
          <ClearButton handleClear = {this.handleClear}/>
        </div>
      </div>
    );
  }
}

export default App;
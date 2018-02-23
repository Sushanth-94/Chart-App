import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Bar from './BarChart';
import Line from './LineChart';
import Table from './Table';
import Tabs from './Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      data1 : {
      label: "Transaction Count",
      values: [{x: "Thu", y: 20},{x: "Fri", y:44},{x:"Sat", y:10},{x: "Sun", y:36}]
      },
      data2 : {
      label: "Transaction Count",
      values: [{x: "Thu", y:0},{x: "Fri", y:0},{x:"Sat", y:1},{x: "Sun", y:0},{x: "Mon", y:0}]
      }      
    };
  }
  render() {
  return (
    <div className = 'row'>
      <div className = 'col-md-4'>
      <Bar />
      </div>
      <div className = 'col-md-4'>
      <Line data ={this.state.data1}/>
      </div>
      <div className = 'col-md-4'>
      <Line data= {this.state.data2} />
      </div>
      <div className = 'col-md-4'>
      <Tabs />
      </div>
      <div className = 'col-md-4'>
      <Tabs />
      </div>
      <div className = 'col-md-4'>
      <Table />
      </div>        
    </div>
  )
} 
};

ReactDOM.render(
    <App />
  , document.getElementById('root'));

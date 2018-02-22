import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './BarChart';
import Line from './LineChart';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const App  = () => {
  return (
    <div className = 'panel panel-default'>
    <Bar />,
    <Line />
    <Table />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

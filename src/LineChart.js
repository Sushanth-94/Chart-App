import React, { Component } from 'react';
import {LineChart} from 'react-d3-components';

class Line extends Component {
  render() {
    var data = {
    label: "salaries",
    values: [{x: "Developer", y: 4},{x: "Admin", y:2},{x:"Manager", y:4},{x: "Other", y:3}]
    };
    return (
      <div>
      <LineChart
        data={data}
        width={800}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        //colorByLabel={false}
        />
      </div>
    );
  }
}

export default Line;

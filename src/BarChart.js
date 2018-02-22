import React, { Component } from 'react';
import {BarChart} from 'react-d3-components';

class Bar extends Component {
  render() {
    var data = {
    label: "salaries",
    values: [{x: "IN", y: 4},{x: "OUT", y:2},{x:"INBOUND", y:4},{x: "OUTBOUND", y:3}]
    };
    return (
      <div>
      <BarChart
        data={data}
        width={800}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        colorByLabel={false}
        />
        PARTNER LEVEL DETAILS
      </div>
    );
  }
}

export default Bar;

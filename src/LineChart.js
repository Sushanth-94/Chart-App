import React, { Component } from 'react';
import {LineChart} from 'react-d3-components';

const Line = (props) => {
    //const data = props.data;
    return (
      <div>
      <LineChart
        data = {props.data}
        width={400}
        height={300}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        //colorByLabel={false}
        />
      </div>
    );
};

export default Line;

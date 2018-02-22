import React from "react";
 
const Table = () => {
return (
    <div>
      <table class="table-bordered">
        <thead>
        <tr>
        <th>Name Of Queue</th>
        <th>Total Messages Enqueued</th>
        <th>Total Messages Dequeued</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">Allan Queue</th>
        <td>21456</td>
        <td>12312</td>
        </tr>
        <tr>
        <th scope="row">Bothell Queue</th>
        <td>34343</td>
        <td>2434</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
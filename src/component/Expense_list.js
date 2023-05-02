import React from 'react'
import styles from './expense-Style/styles.css'
import ExpenseDate from './ExpenseDate.js'
import GeneratingID from './GeneratingID'



export default function Expense_list(props) {



  let dataLength = props.data
        // console.log(dataLength);
let listappend = dataLength.map((item) => {
  return(
    <div class="table">
      <li class="tableRow" key={item.id}>
      <h6 class="cell"><GeneratingID id={item.id}/></h6>
        <h6 class="cell">{item.name}</h6>
        <h6 class="cell">{"Ksh "  + item.amount }</h6>
        <h6 class="cell"><ExpenseDate date={item.date}/></h6>

      </li>
    </div>
          
  );

});


 
 
  return (
   <>
  <div class="card text-dark">
  <div class="card-header text-dark" >
    <h2 class="display-4 ExpenseCardH2" >My Expenses</h2>
  </div>
  <ul class="ul">
    <li>
      {listappend
      /* <table class="table">
        <tr>
          <td>Id</td>         
          <td>type</td>
          <td>amount</td>
        </tr>

        <tr>
          <td>{id}</td>
          <td>{namee}</td>
          <td>{amount}</td>
        </tr>
      </table>  */}
     </li>
  </ul>
</div>
    </>
    
  );
}




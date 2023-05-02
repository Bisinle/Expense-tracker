import React from 'react'

const ExpenseDate = (props) => {
  const year = props.date.toLocaleString('en-US',{year:'numeric'});
  const month = props.date.toLocaleString('en-US',{month:'short'});
  const day = props.date.toLocaleString('en-US',{day:'numeric'});
  
  return (
    <div>
      <p>{month}/{day}/{year}  </p>
    </div>
  )
}

export default ExpenseDate

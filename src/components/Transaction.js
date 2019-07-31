import React from 'react'

const Transaction = (props) => {
  // debugger
  console.log(props.singleTransaction)
  return (
    <tr>
      <td>{props.singleTransaction.posted_at}</td>
      <td>{props.singleTransaction.description}</td>
      <td>{props.singleTransaction.category}</td>
      <td>{props.singleTransaction.amount}</td>
    </tr>
  )
}

export default Transaction

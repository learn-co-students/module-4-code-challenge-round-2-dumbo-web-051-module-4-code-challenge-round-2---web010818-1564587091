import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  state={
    transactions:[],
    searchTerm: "",
    filteredTransactions:[]
  }

  componentWillMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(transactionsData =>
        this.setState({
          transactions: transactionsData
        })
      );
  }

  handleChange = (event) => {
    console.log(event.target.value) 
    this.setState({
      searchTerm: event.target.value
    })
    // your code here
    this.props.handleChange(event.target.value)
    
  }
  
//  filteredTransactions = () => {
//     return this.state.transactions.filter(transaction => {
//       return transaction.name.includes(this.state.searchTerm)
//     })
//   }

  render() {
    let filteredArray = this.state.transactions;
    if (this.state.searchTerm = ""){
      transactions = this.state.transactions
    }else{
       filteredArray = this.state.transactions.filter(transaction => {return transaction.category.includes(this.state.searchTerm)} 
      )
    }

    console.log(this.state.searchTerm)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
// https://boiling-brook-94902.herokuapp.com/transactions

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //
  //
  //   // get a default state working with the data imported from TransactionsData
  //   // use this to get the functionality working
  //   // then replace the default transactions with a call to the API
  //
  // }

  state = {
      transactions: [],
      searchTerm: ''
  }

  componentDidMount(){
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
        .then(response => response.json())
        .then(bankData => this.setState({ transactions: bankData}))
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event})
  }

  searchTransaction = () => {
    return this.state.transactions.filter( transaction => {
      return transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} inputTerm={this.handleChange}/>
        <TransactionsList
          bankTransactions={this.searchTransaction()}/>
      </div>
    )
  }
}

export default AccountContainer

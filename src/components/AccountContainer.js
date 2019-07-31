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

  state = {
    data: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(bankData => this.setState({ data: bankData }))
  }

  handleSearchChange(e) {
    e.preventDefault()
    this.setState({ searchTerm: e.target.value })
  }



  render() {
    const filteredTransactions = this.state.data.description.filter(transaction => this.state.searchTerm === this.state.data.description)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <TransactionsList bankData={this.state.data} />
      </div>
    )
  }
}

export default AccountContainer

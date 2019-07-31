import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: transactions,
    search: ""
  }

  fetchGetTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r => r.json())
    .then(j => this.setState({transactions: j}))
  }

  componentDidMount() {
    this.fetchGetTransactions()
  }

  handleChange = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }

  handleSearchChange = () => {
    this.fetchGetTransactions()
  }

  returnTransactions = () => {
    let transactionCopy = [...this.state.transactions]
    let filtered = transactionCopy.filter(transaction => {
      return transaction.category.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.description.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return filtered
  }

  render() {
    console.log(this.state.transactions);
    return (
      <div>
        <Search searchTerm={this.state.search} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.returnTransactions()} />
      </div>
    )
  }
}

export default AccountContainer

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions
        })
      })
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    const transactions = this.state.searchTerm === '' ? this.state.transactions : this.state.transactions.filter(tr => tr.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || tr.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer

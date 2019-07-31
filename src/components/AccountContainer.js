import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: transactions,
    filterTerm: ''
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( res => res.json())
    .then( transactionJSON => this.setState({
      transactions: transactionJSON
    }))
  }

  handleChange = (e) => {
    this.setState({
      filterTerm: e.target.value
    })
  }

  render() {
    console.log(this.state.filterTerm);
    const filter = this.state.transactions.filter( transaction => transaction.category.toLowerCase().includes(this.state.filterTerm))

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={filter}/>
      </div>
    )
  }
}

export default AccountContainer

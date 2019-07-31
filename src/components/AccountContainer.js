import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }


  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactionsData => {
      this.setState({transactions: transactionsData})
    })
  }



  render() {

  const filteredSearch = this.state.transactions
  .filter(aTransaction => aTransaction.description.charAt(0).includes(this.state.searchTerm))

  const filteredSearch = this.state.transactions
  .filter(aTransaction => aTransaction.description.includes(this.state.searchTerm) )

    return (
      <div>
        <Search search={this.state.searchTerm}
        searchBar={this.handleSearchChange}
           />
        <TransactionsList allTransactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer

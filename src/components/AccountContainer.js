import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions:[],
    searchTerm:""
  }

    componentDidMount() {
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then (response => response.json())
      .then (transactionsData => this.setState({
        transactions:transactionsData
      }))
    }



    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API



  handleChange=(event)=> {
    // console.log(event.target.value)
  this.setState({
    searchTerm: event.target.value
  });



  }

  render() {
    const filteredSearch = this.state.transactions.filter(term => term.description.includes(this.state.searchTerm) || term.category.includes(this.state.searchTerm))
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} onChange={this.handleChange}/>
        <TransactionsList transactions={filteredSearch}/>
      </div>
    )
  }
}

export default AccountContainer

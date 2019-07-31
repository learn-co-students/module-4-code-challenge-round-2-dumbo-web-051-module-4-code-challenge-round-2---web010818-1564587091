import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    searchTerm: "",
    bankData: []
  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    componentDidMount(){
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => this.setState({bankData: data}))
    }

  handleChange(event) {
    // your code here
    // console.log(event)
    this.setState({searchTerm: event})
  }



  render() {

    console.log(this.state.searchTerm)

    return (
      <div>
        <Search handleSearchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <TransactionsList allData={this.state.bankData} />
      </div>
    )
  }
}

export default AccountContainer

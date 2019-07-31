import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state= {
    tranTable:[],
    searchTerm: ''

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount=()=>{
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(tableData => this.setState({tranTable: tableData}))
  }

  searchFilterTerm=(event) => {
    // console.log(event);
    this.setState({searchTerm:[event.target.value]})
    // your code here
  }
  
//didn't make it lower care or upper case
  filterTerms=()=>{
    return this.state.tranTable.filter(oneTerm => oneTerm.category.includes(this.state.searchTerm) || oneTerm.description.includes(this.state.searchTerm) )
  }



  render() {

    return (
      <div>
        <Search searchFilterTerm={this.searchFilterTerm} />
        <TransactionsList tranTable={this.filterTerms()} />
      </div>
    )
  }
}

export default AccountContainer

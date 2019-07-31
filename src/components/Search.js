import React, { Component } from 'react'
// import React from 'react'


class  Search extends Component {
  state ={
    term: ""
  }
  // console.log('hi')
  render(){

  return (
    <div className="ui huge fluid icon input">
      <input onChange={(event) => this.props.handleChange(event.target.value)}
        type="text"
        value={this.state.value}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
    )
  }
}


export default Search

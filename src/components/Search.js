import React from 'react'

const Search = (searchTerm) => {

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"} value={this.state.searchTerm} onChange={() => handleSearchChange()} />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

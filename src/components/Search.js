import React from 'react'

const Search = (props) => {
  console.log(props);
  return (
    <div className="ui huge fluid icon input" >
      <input onChange={props.searchFilterTerm}
        type="text" name="searchTerm" value={props.searchTerm}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

import React from 'react'
// import AccountContainer from './AccountContainer'

class Search extends React.Component {


  handleChange = (event) => {
    this.props.handleSearchChange(event.target.value)
  }


  render () {

      return (
        <div className="ui huge fluid icon input" onChange={this.handleChange}>
          <input
            type="text"
            placeholder={"Search your Recent Transactions"}
          />
          <i className="circular search link icon"></i>
        </div>
      )

  }

}

export default Search

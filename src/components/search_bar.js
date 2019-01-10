import React, { Component } from 'react'



class SearchBar extends Component {
  // Initiate state for class based component.
  // Only class based component has state, function based component does not.
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  // First create a event handler, and then pass it to the element that going to watch that
  // event.

  //Whenever we want to reference a javascript variable, always warp it with curly braces
  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;


import React, { Component } from 'react';

class SurfboardFilter extends Component {
  constructor(){
    super()
    this.state = {
      surfSearch: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      surfSearch: event.target.value
    })
  this.props.handleSubmit(event.target.value)
  }


  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.surfSearch}
          onChange={this.handleChange}
          placeholder="filter surfboards">
          </input>
      </form>
    )

  }
}

export default SurfboardFilter;

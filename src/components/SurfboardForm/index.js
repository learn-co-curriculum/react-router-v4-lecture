import React, { Component } from 'react';
import surfboards from '../../data/surfboards';
import './SurfboardForm.css';

const validates = ({ brand, model, size, imageURL }) => {
  let errors = {}

  if (!brand.trim()) {
    errors.brand = "Brand can't be blank"
  } 

  if (!model.trim()) {
    errors.model = "Model can't be blank"
  }

  if (!size.trim()) {
    errors.size = "Size can't be blank"
  }

  if (!imageURL.trim()) {
    errors.imageURL = "You must include an Image URL"
  }
  
  return errors;
}

class SurfboardForm extends Component {

  constructor() {
    super()

    this.state = {
      brand: '',
      model: '',
      size: '', 
      imageURL: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      this.setState({
        errors: validates(this.state)
      })
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let errors = validates(this.state)
    if (errors.length > 0) {
      this.setState({ errors })
    }

    surfboards.push(Object.assign({}, this.state, { id: surfboards.lenght + 1 }))
  }

  render() {
    return (
      <div className="form">
        <div className="formScreen">
          <div className="formTitle">
            <h1>Add Surfboard</h1>
          </div>

          <form 
            onSubmit={this.handleOnSubmit}
            className="surfboardForm"
          >
            <input 
              name="brand"
              type="text"
              value={this.state.brand}
              onChange={this.handleOnChange}
              placeholder="Brand"
            />
            <label htmlFor="brand" />
            {this.state.errors && this.state.errors.brand &&
              <div className="error">{this.state.errors.brand}</div>
            }

            <input 
              name="model"
              type="text"
              value={this.state.model}
              onChange={this.handleOnChange}
              placeholder="model"
            />
            <label htmlFor="Model" />
            {this.state.errors && this.state.errors.model &&
              <div className="error">{this.state.errors.model}</div>
            }

            <input 
              name="size"
              type="text"
              value={this.state.size}
              onChange={this.handleOnChange}
              placeholder="Size"
            />
            <label htmlFor="size" />
            {this.state.errors && this.state.errors.size &&
              <div className="error">{this.state.errors.size}</div>
            }

            <input 
              name="imageURL"
              type="text"
              value={this.state.imageURL}
              onChange={this.handleOnChange}
              placeholder="Image Link"
            />
            <label htmlFor="imageURL" />
            {this.state.errors && this.state.errors.imageURL &&
              <div className="error">{this.state.errors.imageURL}</div>
            }

            <input 
              type="submit"
              value="Create"
              className="btn" 
            />

          </form>
        </div>
      </div>
    )
  }

}

export default SurfboardForm;


import React, { Component } from 'react';
import SurfboardDetail from '../../components/SurfboardDetail';
import SurfboardForm from '../../components/SurfboardForm';
import {NavLink, Route, Switch} from 'react-router-dom'

class Surfboards extends Component {

  constructor(props) {
    super(props)

    this.state = {
      surfboards: [
        {
          "id": 1,
          "brand": "Al Merrick",
          "size": "6'1\"",
          "model": "Tuflite Flyer",
          "imageURL": "https://cdn.shopify.com/s/files/1/0460/0265/products/al-merrick-flyer_large.png?v=1481657729"
        },
        {
          "id": 2,
          "brand": "Russell",
          "size": "6'11\"",
          "model": "Twin Fin",
          "imageURL": "https://cdn.shopify.com/s/files/1/0460/0265/products/russell-fish_large.png?v=1497221164"
        },
        {
          "id": 3,
          "brand": "Bailey Pittard",
          "size": "5'8\"",
          "model": "Rainbow Shortboard",
          "imageURL": "https://cdn.shopify.com/s/files/1/0460/0265/products/bailey-pittard-rainbow_large.png?v=1491862134"
        },
        {
          "id": 4,
          "brand": "Shred The Gnar",
          "size": "5'11\"",
          "model": "Shortboard",
          "imageURL": "https://cdn.shopify.com/s/files/1/0460/0265/products/stg-shorty_large.png?v=1489000364"
        }
      ]
    }
  }

  addSurfboard = surfboard => {
    this.setState({
      surfboards: [
        ...this.state.surfboards,
        Object.assign({}, surfboard, { id: this.state.surfboards.length + 1 })
      ]
    });
  }

  render() {
    const { surfboards } = this.state;

    return (
      <div>
        <div className="sidebar">
          <h2>Surfboards</h2>
          {surfboards.map((surfboard)=>(<NavLink to={`/surfboards/${surfboard.id}`} className="sidebarNavlink"><img src={surfboard.imageURL} height='70'width='70'/></NavLink>))}
          <NavLink to='/surfboards/new' className="sidebarNavlink">ADD A NEW BOARD</NavLink>
        </div>
        <div className="mainContent">
          <Switch>
            <Route path={`${this.props.match.url}/new`} render={()=>(<SurfboardForm addSurfboard={this.addSurfboard}/>)}/>
            <Route path ="/surfboards/:id" render={({match})=> (<SurfboardDetail surfboard={ surfboards.find(
              surfboard=> {return match.params.id == surfboard.id}) }/>)
            }/>
          </Switch>
        </div>
      </div>
    )
  }
}
export default Surfboards;

import React from 'react';
import fishes from '../sample-fishes';
import AddFishForm from './AddFishForm';
import {formatPrice} from '../helpers'

class Fish extends React.Component {
render() {
  return (
    <li className="menu-fish">
      <img src={this.props.details.image}
            alt={this.props.details.name} />
      <h3 className="fish-name">{this.props.details.name}
      <span className="price">{this.props.details.price[formatPrice(price)]}</span>      
      </h3>
      <p>{this.props.details.desc}</p>
    </li>
  
  )
  }
}
export default Fish;

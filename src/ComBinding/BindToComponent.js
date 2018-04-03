import React, { Component } from 'react';
import AddColorForm from './AddColorForm';


class BindToComponent extends Component {
    constructor() {
      super();
      this.logColor = this.logColor.bind(this) //Without this line
  }

   logColor(title, color){
        console.log(`New Color: ${title} | ${color}`)
   }

  render() {
    return (
        <AddColorForm OnNewColor = {this.logColor} />
    );
  }
}

export default BindToComponent;
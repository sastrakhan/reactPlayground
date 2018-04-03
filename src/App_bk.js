import React, { Component } from 'react';
import {v4} from 'uuid';
import ColorList from './Colors-StateLess-Children/ColorList'; 
import AddColorForm from './Colors-StateLess-Children/AddColorForm'; 

//Look at Index.Js for TODO

//Not sure where you're at with this task
//Page 147 resume converting Color to Component instead of Const resuming with defaultProps  

class App extends Component {
    constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        colors: [
             {
                "id": "1"
                  ,"title" : "Lemon Squeezy"
                  ,"color" : "#00c4e2"
                  ,"rating" : 5
                }
              ,
               {
                "id": "2"
                  ,"title" : "Endless Sea"
                  ,"color" : "#26ac56"
                  ,"rating" : 3
                }
              ,
               {
                "id": "3"
                  ,"title" : "Bright Red"
                  ,"color" : "#ff0000"
                  ,"rating" : 1
              }
        ]
      }
      this.addColor = this.addColor.bind(this);
      this.rateColor = this.rateColor.bind(this);
      this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color){
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors}) 
    //react specific function that also envokes Render() method again
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ? //if color ID matches 
        color  :  
        {
          ...color,
          rating   //I think it create an identical but with new rating
        }
      )
      this.setState({colors})
  }

  removeColor(id){
    const colors = this.state.colors.filter(
        color => color.id !== id
      )
    this.setState({colors})

  }

  render() { 
    const { addColor, rateColor, removeColor } = this 
          //The parenthesis snags only 
          //the matching named objs not all of 'This' context
    const {colors} = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor}/>
        <ColorList colors={colors}
                  onRemove={removeColor}
                  onRate={rateColor}
         />
      </div>
    );
  }
}

export default App;
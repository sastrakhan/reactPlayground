import React, { Component}  from 'react';
import PropTypes from 'prop-types'

export class Color extends Component {

    render(){
        const {id, title, highLightColor, color, removeColor} = this.props;
        const {store} = this.context;

        return(
            <div className="color" style={this.style}>
                <h1 style={{backgroundColor: color}} ref="title">{title}</h1>
                <button onClick={() => 
                        removeColor(id)         
                }/>
                <div className="color" style={{ backgroundColor: color}}>
                </div>
                {!color.isHighLighted &&
                                    <h3>Is Highlighted</h3>             
                }
                   <button onClick={() => 
                                        highLightColor(id)                                      
                                    }>Highlight</button>  
            </div>
        )
    }
}

    Color.contextTypes ={
        store: PropTypes.Object
    }

    Color.propTypes = {
        title: PropTypes.string,
        color: PropTypes.string,
        rating: PropTypes.number,
        //onRemove: PropTypes.func,
        onRate: PropTypes.func
    }

    Color.defaultProps = {
        title: undefined,
        rating: 0,
        color: "#000000",
        onRate: f=>f
    }

    
export default Color

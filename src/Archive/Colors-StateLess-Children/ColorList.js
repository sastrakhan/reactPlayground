import React, { Component}  from 'react';
import PropTypes from 'prop-types'
import Color from './Color'
//import '../../stylesheets/ColorList.scss'

const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f}) =>
    <div className="color-list">
        {
          (colors.length === 0) ? <p>No Colors Listed. (Add a Color)</p> :
                                  colors.map(color => 
                                    <Color key={color.id} {...color} 
                                       onRate={(rating) => onRate(color.id, rating)}
                                    />
        )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList

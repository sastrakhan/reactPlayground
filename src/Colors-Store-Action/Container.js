import {connect} from 'react-redux'
import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import AddColorForm from './ui/AddColorForm'
import { color } from './Store_and_Reducers/reducers';
import {addColor, removeColor, highLightColor} from './Actions'
import ColorList from './ui/ColorList';

//Having these container files is nice to place all store functionality
//and all action use in one file
export const NewColor = connect(
    null,
    dispatch =>
    ({
        onNewColor(title, color){
            dispatch(addColor(title, color))
        }
    })
)(AddColorForm)

export const Colors = connect(
    state => 
    ({
        colors: [...state.colors]
    }),
    dispatch =>
        ({
            onRemove(id){
                dispatch(removeColor(id))
            },
            highLightColor(id){
                dispatch(highLightColor(id))
            }
        }),

)(ColorList)

NewColor.contextTypes = {
    store: PropTypes.object
}

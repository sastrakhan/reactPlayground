import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import AddColorForm from './ui/AddColorForm'
import { color } from './Store_and_Reducers/reducers';
import {addColor} from './Actions'

export const NewColor = (props, {store}) =>
    <AddColorForm onNewColor={(title, color) =>
                            store.dispatch(addColor(title, color))
                        } />

NewColor.contextTypes = {
    store: PropTypes.object
}

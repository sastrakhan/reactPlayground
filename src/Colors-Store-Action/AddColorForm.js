import React, { Component}  from 'react';
import PropTypes from 'prop-types'
import {addColor} from './Actions'
//import '../../stylesheets/AddColorForm.scss'

//By have the contextTypes explain what store is BELOW
//we can reference it here without explicitly passing it int
//from the App.JS parent
const AddColorForm = (props, {store}) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        let colorValue = _color.value == "#000000" ? _title.value : _color.value;
        store.dispatch(addColor(_title.value, colorValue))
        _title.value = _title.value
        _color.value = _color.value
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

//HERE :)
AddColorForm.contextTypes = {
    store : PropTypes.object
}

export default AddColorForm

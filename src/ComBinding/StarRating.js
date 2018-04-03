import React, { Component } from 'react';


const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}>
    </div>

class StarRating extends Component {

    static defaultProps = {
        totalStars: 5
    }

	constructor(props){
		super(props)
		this.state = {
			starsSelected: 0
		}
		this.change = this.change.bind(this);
	}

	change(starsSelected){
		//You don't have to pass an object to update. 
		//If the thing you're updating is an Int value, you can
		//send the value 
		this.setState({starsSelected})  //Updates state and runs render() again cause there's new stuff
	}

	render(){
		const {totalStars} = this.props
		const {starsSelected} = this.state

		return(
			<div className="star-rating">
                    {[...Array(totalStars)].map((n, i) =>
                        <Star key={i}
                              selected={i<starsSelected}
                              onClick={() => this.change(i+1)}
                        />
                    )}
                    <p>{starsSelected} of {totalStars} stars</p>
                </div>

		)
	}
}

export default StarRating;
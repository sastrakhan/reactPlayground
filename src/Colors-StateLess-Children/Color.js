import React, { Component}  from 'react';
import PropTypes from 'prop-types'
import StarRating from './Star-Rating'
//import '../../stylesheets/Color.scss'

export class Color extends Component {

    componentWillMount(){
        this.style = {backgroundColor: "#CCC"}
    }

    shouldComponentUpdate(nextProps){
        const {rating} = this.props
        return rating !== nextProps.rating
    }

    componentWillUpdate(nextProps){
        const {title, rating} = this.props
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    componentDidUpdate(prevProps){
        const{title, rating} = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        this.refs.title.style.backgroundColor = "pink"
        this.refs.title.style.color = "black"
        console.log(`${title} is getting ${status}`)
    }

    render(){
        const {title, rating, color, onRate} = this.props;

        return(
            <section className="color" style={this.style}>
                <h1 style={{backgroundColor: color}} ref="title">{title}</h1>
                <div className="color" style={{ backgroundColor: color}}>
                </div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </section>
        )
    }
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


// export class Color extends Component = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f})  =>
//     <section className="color">
//         <div className="color" style={{ backgroundColor: color }}>
//             <h1>{title}</h1>
//         </div>
//         <button onClick={onRemove}> Suck it color </button>
//         <div>
//            <StarRating starsSelected={rating} onRate={onRate}/>
//         </div>
  
//     </section>
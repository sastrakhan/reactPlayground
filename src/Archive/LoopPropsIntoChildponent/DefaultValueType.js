import React from 'react';
import PropTypes from 'prop-types';						
			  


class IngredientList extends React.Component{

		  static defaultProps = {
		    ingredients: ["Raisin", "in the sun"]
		  };
		  
		  static propTypes = {
		    ingredients: PropTypes.array
		  };

		render(){

            const {ingredients} = this.props;			

			return (
				<div>
					<p>Ingredients Required: {ingredients.length}</p>
					<ul>
						{ingredients.map((ingredient, i) => <li key={i}> {ingredient} </li>)}
					</ul>
				</div>
			)				
		}		
}


// IngredientList.defaultProps = {
// 	ingredients: ["Radish", "Pickle"]
// }

// IngredientList.propTypes = {
// 	ingredients: PropTypes.array
// }

export default IngredientList;
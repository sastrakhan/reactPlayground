import React from 'react';
import Recipe from './recipe2'

const Menu = ({ recipes }) =>
	<article>
		<div className="recipes">
			{ recipes.map((recipe, i) =>
				<Recipe key={i} {...recipe} />)
			}
		</div>
	</article>

export default Menu




import React from 'react';

const RecipeTwo = ({name, description}) =>
	<section id={name.toLowerCase().replace(/ /g, '-')}>
	<h1>{name}</h1>
	<p>{description}</p>
	</section>

export default RecipeTwo;
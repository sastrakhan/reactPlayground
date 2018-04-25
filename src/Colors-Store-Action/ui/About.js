import Better from './Better'
import { Route, Link } from 'react-router-dom'

const About = () => {
	return (
		<form>
		<Route path='/better' component={About} />
		<li>
			<Link to="/better">Better</Link>
		</li>
		<label>
			Uy nana what's my name:
      <input type="text" name="name" />
		</label>
		<input type="submit" value="Submit" />
	</form>
	)
}

	
export default About

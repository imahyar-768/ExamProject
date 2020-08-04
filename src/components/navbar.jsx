import React from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
	console.log('Navbar - Rendere');

	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="/">
				Navbar{" "}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
}


// class NavBar extends Component {
// 	state = {};
// 	render() {
// 	}
// }

export default NavBar;

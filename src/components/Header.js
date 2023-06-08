 
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="logo"></div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;

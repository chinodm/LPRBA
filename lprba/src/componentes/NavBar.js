import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		
		<header className="header">
			<nav className="menu">
				<ul className="nav-menu">
				<h1>La Pelu <span>by Ailu</span></h1>
					<li>
						<a className="active" href="#">
							Home
						</a>
					</li>
					<li>
						<a href="#">Carrito</a>
					</li>
					<li>
						<a href="#">Login</a>
					</li>
					<li>
						<a href="#">Sobre MI</a>
					</li>
				</ul>

				<CartWidget />

			</nav>
		</header>
	);
};

export default NavBar;
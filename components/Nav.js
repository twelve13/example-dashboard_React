import Link from 'next/link';

const Nav = () => (
	<div className="nav-bar">
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/">
					<a className="page-link">Home</a>
				</Link>
			</div>
		</div>
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/art-inspiration">
					<a className="page-link">Art</a>
				</Link>
			</div>
		</div>
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/recipes">
					<a className="page-link">Recipes</a>
				</Link>
			</div>
		</div>
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/shopping">
					<a className="page-link">Shopping</a>
				</Link>
			</div>
		</div>
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/web-dev">
					<a className="page-link">Web Dev</a>
				</Link>
			</div>
		</div>
		<div className="nav-bar-item">
			<div className="nav-bar-item-inner">
				<Link href="/workout">
					<a className="page-link">Workout</a>
				</Link>
			</div>
		</div>
	</div>
);


export default Nav;
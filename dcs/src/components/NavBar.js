import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='flex'>
            <NavLink exact to="/" activeClassName="dark" className="navlink">Home</NavLink>
            <NavLink to="/education" activeClassName="dark" className="navlink">Education</NavLink>
            <NavLink to="/transportation" activeClassName="dark" className="navlink">Transportation</NavLink>
            <NavLink to="/pricing" activeClassName="dark" className="navlink">Pricing</NavLink>
        </nav>
    );
}
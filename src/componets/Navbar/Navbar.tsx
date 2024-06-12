import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
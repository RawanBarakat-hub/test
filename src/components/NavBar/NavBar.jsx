import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive})=>isActive && "active"}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>isActive && "active"}>About</NavLink></li>
                <li><NavLink to="/service/frontEnd/10" className={({isActive})=>isActive && "active"}>Service</NavLink></li>
                <li><NavLink to="/about/focalx" className={({isActive})=>isActive && "active"}>focal x</NavLink></li>
                <li><NavLink to="/about/xacademy" className={({isActive})=>isActive && "active"}>x academy</NavLink></li>
                <li><NavLink to="/about/focalx/add" className={({isActive})=>isActive && "active"}>Add</NavLink></li>
            </ul>
        </nav>
    )
}
export default NavBar
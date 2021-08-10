import React,{useState} from 'react'
import '../css/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isHamb, setIsHamb] = useState(false);
    
    return (
        <div className="nav-bar">
            <div className="nav-bar__container">
                <div className="nav-bar__right">
                    <h1 className="nav-bar__logo">Tushar Blog</h1>
                </div>
                <MenuIcon className="hamburger" onClick={() => setIsHamb(!isHamb)}/>
                <div className="nav-bar__left">
                    <ul className={isHamb ? "nav-bar_lists show" : "nav-bar_lists"}>
                        <li className="list"><NavLink to="/" className="list__links">Home</NavLink></li>
                        <li className="list"><a href="#" className="list__links">About</a></li>
                        <li className="list"><NavLink to="/blog" className="list__links">Blog</NavLink></li>
                        <li className="list"><NavLink to="/story/new" className="list__links">Write a Story</NavLink></li>
                        <li className="list"><NavLink to="/stories" className="list__links">Stories</NavLink></li>
                        <li className="list"><a href="#" className="list__links">Sign In</a></li>
                        <li className="list"><a href="#" className="list__links">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

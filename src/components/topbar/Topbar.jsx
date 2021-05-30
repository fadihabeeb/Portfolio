import "./topbar.scss"
// import PersonIcon from '@material-ui/icons/Person';
// import {Person} from "material-ui/icons" 
import { Person, Email } from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
        <div className="left"> 
        <a href="#intro" className="logo">Logo</a>
        <div className="itemContainer"> 
            <Person className="icon"/>
            <span>Fadi Habeeb</span>
        </div>

        <div className="itemContainer">
            <Email  className="icon"/>
            <span>Fadi2habeeb@gmail.com</span>
        </div>
        </div>
        <div> 
            ddd
        </div>
        
        <div className="right"> 
        <div className ="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
        </div>
        </div>
        </div>
    )
}

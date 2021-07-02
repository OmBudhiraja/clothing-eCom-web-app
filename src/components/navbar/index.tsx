import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
import { auth } from '../../firebase/firebaseUtils';
import './index.scss'

interface Props {
    currentUser : null | {name: string; email: string; id: string}
}
 
const Navbar: React.FC<Props> = ({currentUser}) => {
    return (
        <div className="navbar">
            <Link className="logo-container" to="/" >
               <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                ) : <Link className="option" to="/login">SIGN IN</Link>}
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import {Link} from 'react-router-dom'
import {useAppSelector} from '../../redux/hook'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown';
import {selectUser} from '../../redux/user/userSlice'
import {selectCartHidden} from '../../redux/cart/cartSlice'
import './index.scss'
 
const Navbar: React.FC = () => {
    const currentUser = useAppSelector((state) => selectUser(state))
    const hidden = useAppSelector(state => selectCartHidden(state) )
    console.log('nav rendered')
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
                   <>
                        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                        <CartIcon />
                        { !hidden && <CartDropdown />}
                   </>
                ) :( <Link className="option" to="/login">SIGN IN</Link>)}
            </div>
        </div>
    )
}

export default Navbar

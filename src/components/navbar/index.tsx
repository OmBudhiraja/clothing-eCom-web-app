import React from 'react'
import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown';
import {selectUser, signOut} from '../../redux/user/userSlice'
import {selectCartHidden} from '../../redux/cart/cartSlice'
import styled, {css} from 'styled-components'
 
const Navbar: React.FC = () => {
    const currentUser = useAppSelector((state) => selectUser(state))
    const hidden = useAppSelector(state => selectCartHidden(state) )
    const dispatch = useAppDispatch()
    return (
        <NavbarContainer>
            <LogoContainer to="/" >
               <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {currentUser ? (
                   <>
                        <OptionDiv onClick={()=> dispatch(signOut())}>SIGN OUT</OptionDiv>
                        <CartIcon />
                        { !hidden && <CartDropdown />}
                   </>
                ) :( <OptionLink to="/login">SIGN IN</OptionLink>)}
            </OptionsContainer>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
//   padding: 25px;
    display: flex;
    align-items: center;
`

const OptionsContainer = styled.div`
    min-width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Options = css`
    padding: 10px 15px;
    cursor: pointer
`

const OptionLink = styled(Link)`
   ${Options}
`
const OptionDiv = styled.div`
   ${Options}
`


export default Navbar

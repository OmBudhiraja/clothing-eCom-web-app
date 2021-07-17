import React from 'react'
import {Link} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../redux/hook'
import {ReactComponent as Logo} from '../../assets/crown.svg'
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
    @media screen and (max-width: 800px ){
      padding: 10px;
      margin-bottom: 20px;
      height: 60px
    }
`

const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    svg{
        width: 100%;
        height: auto
    };
//   padding: 25px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 800px ){
        width: 40px
    }
`

const OptionsContainer = styled.div`
    min-width: 50%;
    max-width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Options = css`
    padding: 10px 30px;
    cursor: pointer;
    @media screen and (max-width: 800px ){
        padding: 13px ;
    }
`

const OptionLink = styled(Link)`
   ${Options}
`
const OptionDiv = styled.div`
   ${Options};
   display: contents
`


export default Navbar

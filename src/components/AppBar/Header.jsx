import { Header, HeaderNavLink } from "./Header.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader.jsx';

const AppBar = () => {
    return (
        <>
        <Header>
            <div className="container">
                <nav>
                    <HeaderNavLink to="/" end>Home</HeaderNavLink>
                    <HeaderNavLink to="/register">Sign Up</HeaderNavLink>
                    <HeaderNavLink to="/login">Sign In</HeaderNavLink>
                    <HeaderNavLink to="/contacts">Contacts</HeaderNavLink>
                </nav>
            </div>
        </Header> 
        <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
    )
}
export default AppBar; 
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Home = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/Register/Regisster'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useSelector(selectAuth);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin} = useSelector(selectAuth);
  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}/>
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

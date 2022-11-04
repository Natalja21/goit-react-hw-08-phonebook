import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { current } from 'redux/auth-redux/auth-operations';
import Loader from './Loader/Loader';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Home = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/Register/Regisster'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isLoadingUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
         </Route> 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

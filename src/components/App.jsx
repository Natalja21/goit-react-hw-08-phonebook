import { Routes, Route } from 'react-router-dom';
import AppBar from './Header/Header';
import { lazy } from 'react';
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Home = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<div>Register Form</div>} />
          <Route path="/login" element={<div>Login Form</div>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

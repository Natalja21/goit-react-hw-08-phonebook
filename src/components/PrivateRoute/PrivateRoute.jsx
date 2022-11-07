import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/selectors';

export default function PrivateRoute() {
  const { isLogin } = useSelector(selectAuth);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

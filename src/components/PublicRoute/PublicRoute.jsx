import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/selectors';

export default function PublicRoute() {
  const { isLogin } = useSelector(selectAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
}

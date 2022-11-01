import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { selectAuth } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLogin } = useSelector(selectAuth);
  return (
    <Header>
      <div className="container">
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthNav />}
      </div>
    </Header>
  );
};
export default AppBar;

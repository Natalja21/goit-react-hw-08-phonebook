import { LinkNav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

const Navigation = () => {
  const { isLogin } = useSelector(selectAuth);
  return (
    <nav>
      {!isLogin ? (
        <LinkNav to="/" end>
          Home
        </LinkNav>
      ) : (
        <LinkNav to="/contacts"> Contacts</LinkNav>
      )}
    </nav>
  );
};
export default Navigation;

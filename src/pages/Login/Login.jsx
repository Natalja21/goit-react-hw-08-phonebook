import { Title } from './Login.styled';
import LoginForm from 'components/LoginForm/LoginForm';
const Login = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Title>Login</Title>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default Login;

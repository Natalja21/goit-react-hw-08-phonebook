import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Title, Text } from './Register.styled';

const Register = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Title>Register</Title>
          <Text>Please fill in this form to create an account.</Text>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};
export default Register;

import {
  Form,
  Label,
  Input,
  Button,
} from './LoginForm.styled';

import { login } from 'redux/auth-redux/auth-operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="email" placeholder="Enter email" required />
      </Label>
      <Label>
        Password
        <Input
          type="current-password"
          name="password"
          placeholder="Enter password"
          required
        />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
export default LoginForm;

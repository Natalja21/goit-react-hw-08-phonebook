import {  Form, Label, Input, Button } from './RegisterForm.styled';
import { signup } from 'redux/auth-redux/auth-operations';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" placeholder="Enter Name" required />
      </Label>

      <Label>
        Email
        <Input type="email" name="email" placeholder="Enter Email" required />
      </Label>
      <Label>
        Password
        <Input
          type="current-password"
          name="password"
          placeholder="Enter Password"
          required
        />
      </Label>

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
export default RegisterForm;

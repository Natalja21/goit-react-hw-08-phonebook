import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactsForm = () => {
  return (
    <Form>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="* fields are required"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          placeholder="* fields are required"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactsForm;

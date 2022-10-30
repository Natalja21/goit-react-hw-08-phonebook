import { ContactBox, ContactsTitle } from './Contacts.styled';
import ContactsForm from 'components/Contacts/AddContactForm/ContactsForm';
import SearchBar from 'components/Contacts/SearchBar/SearchBar';

const ContactsPage = () => {
  return (
    <ContactBox>
      <div className="section">
        <div className="container">
           <ContactsTitle>Contacts</ContactsTitle>
          <ContactsForm/>        
          <SearchBar/>
        </div>
      </div>
    </ContactBox>
  );
};
export default ContactsPage;

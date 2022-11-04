import { ContactBox, ContactsTitle } from './Contacts.styled';
import ContactsForm from 'components/Contacts/AddContactForm/ContactsForm';
import SearchBar from 'components/Contacts/SearchBar/SearchBar';
import ContactsList from 'components/Contacts/ContactsList/ContactsList'


const ContactsPage = () => {
  return (
    <ContactBox>
      <div className="section">
          <div className="container">
           <ContactsTitle>Contacts</ContactsTitle>
          <ContactsForm/>        
          <SearchBar />
          <ContactsList/>
        </div>
      </div>
    </ContactBox>
  );
};
export default ContactsPage;

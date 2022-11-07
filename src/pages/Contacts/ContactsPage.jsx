import { ContactBox, ContactsTitle } from './Contacts.styled';
import ContactsForm from 'components/Contacts/AddContactForm/ContactsForm';
import SearchBar from 'components/Contacts/SearchBar/SearchBar';
import ContactsList from 'components/Contacts/ContactsList/ContactsList';

const ContactsPage = () => {
  return (
    <main>
      <div className="section">
        <div className="container">
          <ContactBox>
            <div>
              <ContactsTitle>Add contacts</ContactsTitle>
              <ContactsForm />
            </div>
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <SearchBar />
              <ContactsList />
            </div>
          </ContactBox>
        </div>
      </div>
    </main>
  );
};
export default ContactsPage;

import { List } from "./ContactsList.styled";
import ContactsItem from "./ContactsItem";
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts-operations';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }

    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsFiltered = getFilteredContacts();


  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Something went wrong, please, try again</div>}
      <List >
        {contactsFiltered.length > 0 &&
          contactsFiltered.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
   </>
  );
};

export default ContactsList;

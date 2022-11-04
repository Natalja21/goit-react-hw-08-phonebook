import { Item, Text, Button } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/contacts-redux/contacts-operations';

const ContactsItem = items => {
    const dispatch = useDispatch();
  const { id, number, name } = items;
  return (
    <Item >
      <Text>
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </Button>
    </Item>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  items: PropTypes.objectOf(PropTypes.string.isRequired),
};

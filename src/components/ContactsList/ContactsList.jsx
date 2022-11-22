import PropTypes from 'prop-types';
import { DeleteButton, ContactsListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(cont => (
        <ContactsListItem key={cont.id}>
          {cont.name}: {cont.number}
          <DeleteButton
            type="button"
            onClick={() => {
              onDeleteContact(cont.id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactsListItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

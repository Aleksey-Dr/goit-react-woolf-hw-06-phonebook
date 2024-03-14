import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactList/ContactListItem';

import css from './ContactList.module.scss';

const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    const contacts = useSelector(state => state.contacts.contacts);

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
        <ul className={css.list}>
            {filterContacts.map(contact => {
                return (
                    <ContactListItem
                        key={contact.id}
                        contact={contact}
                    />
                );
            })}
        </ul>
    );
};

export default ContactList;

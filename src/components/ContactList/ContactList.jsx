// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css"

// export default function ContactList({ contacts, onDelete }) {
//      return (
//     <ul className={css.list}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact data={contact} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// }
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
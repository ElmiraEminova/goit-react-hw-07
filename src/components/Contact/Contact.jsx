// export default function Contact({ data: { id, name, number }, onDelete }) {
//     return (
//         <div >
//             <div >
//             <p>{name}</p>
//             <p>{number}</p>
//             </div>
//             <button type="button" onClick={()=>{onDelete(id)}}>Delete</button>
//         </div>
//     )
// }
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {selectLoading, selectError} from "../../redux/contactsSlice"

export default function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
    return (
    <div >
      <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox />
        {loading && <p>Loading....</p>}
        {error && <p>Something went wrong, please reload the page</p>}
        <ContactList />
          
    </div>
  );
}
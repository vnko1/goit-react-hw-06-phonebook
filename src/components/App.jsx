import { ContactForm, ContactList, Filter } from './phoneBook';

// import { STORAGE_KEY } from './services/constants';
// import { load, save } from './services/localStorage';

export const App = () => {
  // const [contacts, setContacts] = useState(() => load(STORAGE_KEY) ?? []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   save(STORAGE_KEY, contacts);
  // }, [contacts]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </section>
    </div>
  );
};

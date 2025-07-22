import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useCallback, useReducer, useRef } from 'react';

const reducer = (state, action) =>{
  switch (action.type)
  {
      case "CREATE" :
        return [action.data, ...state];
      case "DELETE" :
        return state.filter((focusID) => focusID.id !== action.targetId);
      default :
        return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        name,
        contact
      }
    })
  }, []);

  const onDeleteContact = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId
    })
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreateContact ={onCreateContact}/>
      </section>
      <section>
        <ContactList contacts = {contacts} onDeleteContact = {onDeleteContact}/>
      </section>
    </div>
  );
}

export default App;

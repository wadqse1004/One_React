import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useCallback, useReducer, useRef, useMemo, createContext } from 'react';

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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

  const memoDispatch = useMemo(
    () => ({onCreateContact, onDeleteContact}), []
  )

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoDispatch}>
      <section>
        <ContactEditor/>
      </section>
      <section>
        <ContactList/>
      </section>
      </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;

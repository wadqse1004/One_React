import "./ContactList.css";
import ContactItem from "./ContactItem";
import { memo } from "react";

function ContactList({contacts, onDeleteContact}) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => {
        return <ContactItem key={contact.id} {...contact} onDeleteContact={onDeleteContact}/>
      })}
    </div>
  );
}

export default memo(ContactList);

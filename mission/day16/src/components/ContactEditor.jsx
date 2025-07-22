import "./ContactEditor.css";
import { useState, memo } from 'react';

function ContactEditor({onCreateContact}) {
  const [state, setState] = useState({
    name : "",
    contact : ""
  })

  const onChangeState = (e) =>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = () => {
    if(state.name === "" || state.contact === ""){
      alert("이름과 연락처 기입은 필수입니다.")
      return;
    }

    onCreateContact(state.name, state.contact);

    setState({
      name : "",
      contact : ""
    })
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input name='name' value={state.name} onChange={onChangeState} className="name" placeholder="이름 ..." />
        <input name='contact' value={state.contact} onChange={onChangeState} className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
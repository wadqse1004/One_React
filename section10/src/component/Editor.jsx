import { useRef, useState } from 'react';
import "./Editor.css";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState();
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDownEvent = (e) => {
        if(e.keyCode === 13)
        {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if(content === "")
        {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent("");
    }

    return (
    <div className='Editor'>
        <input ref={contentRef} value={content} onKeyDown={onKeyDownEvent} onChange = {onChangeContent} placeholder='새로운 Todo...' />
        <button onClick={onSubmit}>추가</button>
    </div>
    )
}

export default Editor;
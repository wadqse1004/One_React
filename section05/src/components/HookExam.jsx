import { useState } from 'react';

function useInput(){
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);

    }

    return [input, setInput]
}

const HookExam = () => {
    const [input, onChange] = useInput();

    return <div>HookExam</div>
}

export default HookExam;
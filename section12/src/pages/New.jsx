import Button from '../component/Button';
import Editor from '../component/Editor';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../Hooks/usePageTitle';

const New = () => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);

    usePageTitle("새 일기 쓰기");

    const onSubmit = (input) => {
        onCreate(input.createDate.getTime(), input.emotionId, input.content);
        nav('/', {replace: true})
    }

    return <div>
        <Header title={"새 일기 쓰기"} leftChild={ <Button text = "< 뒤로가기" onClick={() => nav(-1)}/>}/>
        <Editor onSubmit={onSubmit}/>
    </div>
}

export default New;
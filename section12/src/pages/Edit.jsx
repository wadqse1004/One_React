import { useNavigate, useParams } from 'react-router-dom'
import Header from '../component/Header';
import Button from '../component/Button';
import Editor from '../component/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import useDiary from '../Hooks/useDiary';
import usePageTitle from '../Hooks/usePageTitle';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);    
    usePageTitle(`${params.id}번 일기 수정`);
    

    const onClickDelete = () => {
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!"))
        {
            onDelete(params.id);
            nav('/', {replace : true});
        }
    }

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정할까요?")){
        onUpdate(input.id, input.createDate.getTime(), input.emotionId, input.content);
        nav('/', {replace: true})
        }
    }

    return <div>
        <Header title={"일기 수정하기"} 
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"}/>} 
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"Negative"}/>}
        />
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
}

export default Edit;
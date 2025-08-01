import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import "./DiaryItem.css";
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';

const DiaryItem = ({id, emotionId, createDate, content}) => {
    const nav = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext);

    const onClickDelete = () => {
        onDelete(id);
    }

    return <div className='DiaryItem'>
        <div onClick={() => nav(`/diary/${id}`)} className={`img_section img_section_${emotionId}`}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div className='info_section'>
            <div onClick={() => nav(`/diary/${id}`)}  className='create_date'>
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
        <div className='button_section'>
            <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
            <Button text={"삭제하기"} onClick={onClickDelete} type={"Negative"}/>
        </div>
    </div>
}

export default DiaryItem;
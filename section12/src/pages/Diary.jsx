import { useNavigate, useParams } from 'react-router-dom';
import Header from '../component/Header';
import Button from '../component/Button';
import Viewer from '../component/Viewer';
import useDiary from '../Hooks/useDiary';
import { getSettingDate } from '../util/get-stringed-date';
import usePageTitle from '../Hooks/usePageTitle';

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();

    const curDiaryItem = useDiary(params.id)

    if(!curDiaryItem){
        return <div>데이터 로딩중...!</div>
    }

    const { createDate, emotionId, content} = curDiaryItem;
    const title = getSettingDate(new Date(createDate));

    return <div>
        <Header title={`${title} 기록`} 
                leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>} 
                rightChild={<Button text={"수정하기"} onClick={()=>nav(`/edit/${params.id}`)}/>}/>
        <Viewer emotionId={emotionId} content={content}/>
    </div>
}

export default Diary;
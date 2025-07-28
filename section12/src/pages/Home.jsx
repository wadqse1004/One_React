import Header from "../component/Header"
import Button from "../component/Button"
import DiaryList from '../component/DiaryList';

import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

    return data.filter((item) => beginTime <= item.createDate && endTime >= item.createDate)
}

const Home = () => {
    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const MonthlyData = getMonthlyData(pivotDate, data)

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
        leftChild = {<Button text={"<"} onClick={onDecreaseMonth}/>}
        rightChild = {<Button text={">"} onClick={onIncreaseMonth}/>}
        />
        <DiaryList data={MonthlyData}/>
    </div>
}

export default Home;
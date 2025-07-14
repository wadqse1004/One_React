import './App.css'
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import Even from './component/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount")
  }, [])
  //2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current)
    {
      isMount.current = true;
      return;
    }
    console.log("update")
  })
  //3. 언마운트 : 죽음
  
  //useEffect(() => {
  //  console.log(`count: ${count} / ${input}`)
  //}, [count, input]);
  //의존성 배열
  //dependency array
  //deps

  const onClickButton = (value) =>{
    setCount(count + value)
    //console.log(count)
    //비동기, setCount는 실행은 됐지만 완료는 안됐음
  }

  return (
    <div className='App'>
        <h1>심플 카운터</h1>
        <section>
          <input value={input} onChange={(e) => {
            setInput(e.target.value)
          }}/>
        </section>
        <section>
        <Viewer count = {count} />
        {count % 2 === 0 ? <Even/> : null}
        </section>
        <section>
        <Controller onClickButton = {onClickButton}/>
        </section>
    </div>
  )
}

export default App

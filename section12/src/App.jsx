import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import "./App.css";
import New from './pages/New';
import Diary from './pages/diary';
import Notfound from './pages/Notfound';
import Home from './pages/home';
import Edit from './pages/Edit';
import { act, useReducer, useRef, createContext } from 'react';

const mockData = [
  {
    id : 1,
    createDate : new Date("2025-07-28").getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
  {
    id : 2,
    createDate : new Date("2025-07-27").getTime(),
    emotionId : 2,
    content : "2번 일기 내용"
  },
  {
    id : 3,
    createDate : new Date("2025-06-22").getTime(),
    emotionId : 3,
    content : "3번 일기 내용"
  }
]

function reducer(state, action){
   switch(action.type)
   {
    case "CREATE" :
      return [action.data, ...state]
    case "UPDATE" :
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE" :
        return state.filter((item) => String(item.id) !== String(action.id));
    default :
      return state;
   }
}

  export const DiaryStateContext = createContext();
  export const DiaryDispatchContext = createContext();

  function App() {

    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createDate, emotionId, content) => {
       dispatch({
         type : "CREATE",
         data : {
            id : idRef.current++,
            createDate,
            emotionId,
            content
         }
       })
    }

    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch(
          {
            type : "UPDATE",
            data : {
              id : id,
              createDate,
              emotionId,
              content
           }
          }
        )
    }

    const onDelete = (id) =>{
        dispatch(
          {
            type : "DELETE",
            id
          }
        )
    }

    return (
      <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/new" element={<New/>}/> 
        <Route path="/diary/:id" element={<Diary/>}/> 
        <Route path="/Edit/:id" element={<Edit/>}/> 
        <Route path='*' element = {<Notfound/>}/>
      </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
      </>
    )
  }

  export default App

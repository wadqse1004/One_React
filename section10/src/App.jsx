  import "./App.css";
  import Header from './component/Header';
  import Editor from './component/Editor';
  import List from './component/List';
  import Exam from './component/Exam';
  import { useState, useRef, useReducer, useCallback } from 'react';

  const mockData = [
    {
      id : 0,
      isDone : false,
      content : "리엑트 공부하기" ,
      date : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "빨래하기" ,
      date : new Date().getTime(),
    },
    {
      id : 2,
      isDone : false,
      content : "노래 연습하기" ,
      date : new Date().getTime(),
    },
  ]

  function reducer(state, action){
      switch(action.type)
      {
        case "CREATE":
          return [action.data, ...state]
        case "UPDATE" :
          return state.map((item) => item.id === action.targetId ? {...item, isDone : !item.isDone} : item)
        case "DELETE" :
          return state.filter((item) => item.id !== action.targetId)
        default : 
          return state;
      }
  }

  function App() {
    
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
      dispatch({
        type : "CREATE",
        data : {
          id : idRef.current++,
          isDone : false,
          content : content,
          date : new Date().getTime()
        }
      })
    }, [])

    const onUpdate = useCallback((targetId) => {
      dispatch({
        type : "UPDATE",
        targetId : targetId
      })
    }, [])
    
    const onDelete = useCallback((targetId) => {
      dispatch({
        type : "DELETE",
        targetId : targetId
      })
     }, []);

    return (
      <div className='App'>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        {/*<Exam/>*/}
      </div>
    )
  }

  export default App

  import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import "./App.css";
import New from './pages/New';
import Diary from './pages/diary';
import Notfound from './pages/Notfound';
import Home from './pages/home';

  function App() {

    const nav = useNavigate();

    const onClickButton = () => {
      nav("/new");
    }

    return (
      <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/new" element={<New/>}/> 
        <Route path="/diary" element={<Diary/>}/> 
        <Route path='*' element = {<Notfound/>}/>
      </Routes>
      </>
    )
  }

  export default App

import './App.css'
import { RecoilRoot } from 'recoil';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { lazy , Suspense } from 'react';

import Home from './pages/Home';
import Loading from './components/common/Loading';
import Notfound from './pages/Notfound';

// 자주 사용하지 않는 페이지는 lazy 로드
const Diary = lazy(() => import('./pages/Diary'));
const New = lazy(() => import('./pages/New'));

function App() {
  const nav = useNavigate();

  const onClickMyButton = () => {
    nav("/new");
  }
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading/>}>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/new"}>New</Link>
          <Link to={"/diary"}>Diary</Link>
        </div>
        <button onClick={onClickMyButton}>new페이지 이동버튼</button>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/diary/:id" element={<Diary/>}/>
          <Route path="/loadingtest" element={<Loading/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Suspense>
    </RecoilRoot>
  );
}
export default App;
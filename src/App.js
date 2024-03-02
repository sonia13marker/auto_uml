import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PersonalAccountPage from './pages/PersonalAccountPage';
import LoginPage from './pages/LoginPage';
import SingupPage from './pages/SingupPage';
import Header from './components/Header';

function App() {
  function PrivateOutlet() {
    return <Header><Outlet /></Header>;
  }
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<PrivateOutlet />}>
            <Route index element={<MainPage />} />
            <Route path='account' element={<PersonalAccountPage />} />
          </Route>
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/singup' element={<SingupPage></SingupPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

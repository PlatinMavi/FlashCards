import logo from './logo.svg';
import './App.css';
import  {Route,Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import CardsPage from './pages/CardsPage';

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage/>} />

      <Route path='/matematik' element={<CardsPage/>} />
      <Route path='/din' element={<CardsPage/>} />
      <Route path='/felsefe' element={<CardsPage/>} />
      <Route path='/kimya' element={<CardsPage/>} />
      <Route path='/biyoloji' element={<CardsPage/>} />
      <Route path='/fizik' element={<CardsPage/>} />
      <Route path='/tarih' element={<CardsPage/>} />
      <Route path='/edebiyat' element={<CardsPage/>} />
    </Routes>
  );
}

export default App;

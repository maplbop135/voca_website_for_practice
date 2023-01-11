import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/createWord';
import CreateDay from './component/createDay';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
          <Route path='/*' element={<EmptyPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

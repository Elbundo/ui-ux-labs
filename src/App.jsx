import './normalize.css'
import './App.css';

import {Routes, Route} from 'react-router-dom';

import { Task1 } from './pages/Task1';
import { Task2 } from './pages/Task2';
import { Task3 } from './pages/Task3';
import { Task4 } from './pages/Task4';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div className='main_wrapper'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Task1 />}/>
          <Route path="/task2" element={<Task2 />}/>
          <Route path="/task3" element={<Task3 />}/>
          <Route path="/task4" element={<Task4 />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

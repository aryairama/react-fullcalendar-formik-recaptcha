import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExampleCalendar from './calendar/ExampleCalendar';
import ExampleFormikHook from './formik/ExampleFormikHook';
import ExampleFormikComponent from './formik/ExampleFormikComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleCalendar />} />
      <Route path="/formik-hook" element={<ExampleFormikHook />} />
      <Route path="/formik-component" element={<ExampleFormikComponent />} />
    </Routes>
  );
}

export default App;

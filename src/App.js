import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExampleCalendar from './calendar/ExampleCalendar';
import ExampleFormikHook from './formik/ExampleFormikHook';
import ExampleFormikComponent from './formik/ExampleFormikComponent';
import ExampleFormikCustomComponent from './formik/ExampleFormikCustomComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleCalendar />} />
      <Route path="/formik-hook" element={<ExampleFormikHook />} />
      <Route path="/formik-component" element={<ExampleFormikComponent />} />
      <Route path="/formik-custom-component" element={<ExampleFormikCustomComponent />} />
    </Routes>
  );
}

export default App;

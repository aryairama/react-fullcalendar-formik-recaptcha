import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExampleCalendar from './calendar/ExampleCalendar';
import ExampleFormikHook from './formik/ExampleFormikHook';
import ExampleFormikComponent from './formik/ExampleFormikComponent';
import ExampleFormikCustomComponent from './formik/ExampleFormikCustomComponent';
import ReCaptcha from './reCAPTCHA/ReCaptcha';
import ReCaptchaV3 from './reCAPTCHA/ReCaptchaV3';
import GoogleReCaptchaRoute from './component/middleware/GoogleReCaptchaRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleCalendar />} />
      <Route path="/formik-hook" element={<ExampleFormikHook />} />
      <Route path="/formik-component" element={<ExampleFormikComponent />} />
      <Route path="/formik-custom-component" element={<ExampleFormikCustomComponent />} />
      <Route path="/recaptcha" element={<ReCaptcha />} />
      <Route path="/recaptcha-v3" element={<GoogleReCaptchaRoute component={ReCaptchaV3} />} />
    </Routes>
  );
}

export default App;

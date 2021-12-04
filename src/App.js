import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExampleCalendar from './calendar/ExampleCalendar';
import ExampleFormikHook from './formik/ExampleFormikHook';
import ExampleFormikComponent from './formik/ExampleFormikComponent';
import ExampleFormikCustomComponent from './formik/ExampleFormikCustomComponent';
import ReCaptcha from './reCAPTCHA/ReCaptcha';
import ReCaptchaV3 from './reCAPTCHA/ReCaptchaV3';
import GoogleReCaptchaRoute from './component/middleware/GoogleReCaptchaRoute';
import ReactTableBasic from './reactTable/ReactTableBasic';
import ReactTableSorting from './reactTable/ReactTableSorting';
import ReactTableFormating from './reactTable/ReactTableFormating';
import ReactTableGlobalFilter from './reactTable/ReactTableGlobalFilter';
import ReactTableGlobalFilterColumnFilter from './reactTable/ReactTableGlobalFilterColumnFilter';
import ReactTablePagination from './reactTable/ReactTablePagination';
import ReactTableCustomPagination from './reactTable/ReactTableCustomPagination';
import ReactTableRowSelect from './reactTable/ReactTableRowSelect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExampleCalendar />} />
      <Route path="/formik-hook" element={<ExampleFormikHook />} />
      <Route path="/formik-component" element={<ExampleFormikComponent />} />
      <Route path="/formik-custom-component" element={<ExampleFormikCustomComponent />} />
      <Route path="/recaptcha" element={<ReCaptcha />} />
      <Route path="/recaptcha-v3" element={<GoogleReCaptchaRoute component={ReCaptchaV3} />} />
      <Route path="/react-table-basic" element={<ReactTableBasic />} />
      <Route path="/react-table-sorting" element={<ReactTableSorting />} />
      <Route path="/react-table-formating" element={<ReactTableFormating />} />
      <Route path="/react-table-global-filter" element={<ReactTableGlobalFilter />} />
      <Route path="/react-table-global-filter-column-filter" element={<ReactTableGlobalFilterColumnFilter />} />
      <Route path="/react-table-pagination" element={<ReactTablePagination />} />
      <Route path="/react-table-custom-pagination" element={<ReactTableCustomPagination />} />
      <Route path="/react-table-rowselect" element={<ReactTableRowSelect />} />
    </Routes>
  );
}

export default App;

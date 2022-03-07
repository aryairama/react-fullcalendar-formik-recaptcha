import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const ExampleCalendar = lazy(() => import('./calendar/ExampleCalendar'));
const ExampleFormikHook = lazy(() => import('./formik/ExampleFormikHook'));
const ExampleFormikComponent = lazy(() => import('./formik/ExampleFormikComponent'));
const ExampleFormikCustomComponent = lazy(() => import('./formik/ExampleFormikCustomComponent'));
const ReCaptcha = lazy(() => import('./reCAPTCHA/ReCaptcha'));
const ReCaptchaV3 = lazy(() => import('./reCAPTCHA/ReCaptchaV3'));
const GoogleReCaptchaRoute = lazy(() => import('./component/middleware/GoogleReCaptchaRoute'));
const ReactTableBasic = lazy(() => import('./reactTable/ReactTableBasic'));
const ReactTableSorting = lazy(() => import('./reactTable/ReactTableSorting'));
const ReactTableFormating = lazy(() => import('./reactTable/ReactTableFormating'));
const ReactTableGlobalFilter = lazy(() => import('./reactTable/ReactTableGlobalFilter'));
const ReactTableGlobalFilterColumnFilter = lazy(() => import('./reactTable/ReactTableGlobalFilterColumnFilter'));
const ReactTablePagination = lazy(() => import('./reactTable/ReactTablePagination'));
const ReactTableCustomPagination = lazy(() => import('./reactTable/ReactTableCustomPagination'));
const ReactTableRowSelect = lazy(() => import('./reactTable/ReactTableRowSelect'));
const ReactTableColumnHiding = lazy(() => import('./reactTable/ReactTableColumnHiding'));
const ReactTablePaginationControlled = lazy(() => import('./reactTable/ReactTablePaginationControlled'));
const ReactTablePaginationControlledExpandedColumn = lazy(() =>
  import('./reactTable/ReactTablePaginationControlledExpandedColumn')
);
const ImgViewer = lazy(() => import('./imgViewer'));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
        <Route path="/react-table-column-hiding" element={<ReactTableColumnHiding />} />
        <Route path="/react-table-pagination-controlled" element={<ReactTablePaginationControlled />} />
        <Route
          path="/react-table-pagination-controlled-expanded-column"
          element={<ReactTablePaginationControlledExpandedColumn />}
        />
        <Route
          path="/imgviewer"
          element={
            <ImgViewer
              images={[
                {
                  url: 'https://api-tokoku.arya-irama-wahono.xyz/public/img/products/eb02abc3-af9f-408e-a21f-fa6b3f2dfbc2.jpg',
                },
                {
                  url: 'https://api-tokoku.arya-irama-wahono.xyz/public/img/products/d764f15a-36be-487c-a1c0-392a8b6f72b8.jpg',
                },
              ]}
            />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;

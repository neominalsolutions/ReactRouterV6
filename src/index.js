import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from './pages/Expenses';
import Invoices from './pages/invoices/Invoices';
import InvoiceList from './pages/invoices/InvoiceList';
import InvoiceDetail from './pages/invoices/InvoiceDetail';
import InvoiceFilter from './pages/invoices/InvoiceFilter';
// tüm uygulama routing özelliği kazansın diye uygulamayı sarmaladık
// routes uygulamaya tanıtacağımızı routelar için kullanılan bir component
// her bir route ise Route ile tanıtılıyor default link App js olduğu için boş linke app.js verdik.
// element ile hangi component açılacağını söyleriz
// path ise route url'mizi temsil eder.
// App route layout olduğundan dolayı diğer sayfalar ile sarıyoruz.
// path="*" en alta yazmamızın sebebi üsteki routelarda eşleşmeyen bir şey varsa direk bu route kısmına düşer. Böylelikle 404 sayfası gösterdik.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expense" element={<Expenses />} />
          <Route path="invoice" element={<Invoices />} >
            <Route path="list" element={<InvoiceList />} />
            <Route path="detail/:id" element={<InvoiceDetail />} />
            <Route path="filter" element={<InvoiceFilter />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page Not Found!</p>
              </main>
            } />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

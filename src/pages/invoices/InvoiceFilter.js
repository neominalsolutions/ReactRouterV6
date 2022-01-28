import React from 'react';
import { useSearchParams,useLocation,useNavigate } from 'react-router-dom';
// query string üzerinden veri okumak için kullanılan useSearchParams hook
// istek yapılan url ait path ve querystring path değerlerini okuyabileceğimiz useLocation hook
// sayfalar arasında yönlenmeyi jsx dosyasında yaptığımız useNavigate hook

function InvoiceFilter() {

   let params =  useSearchParams();
   let location = useLocation();
   let navigate = useNavigate();
   
   console.log('navigate', navigate);
   console.log('location', location);


   console.log('path', location.pathname);
   console.log('queryParams', location.search);


   // query string üzerinden veri okumak için get functions kullandık
   console.log('name', params[0].get('name'))
   console.log('amount', params[0].get('amount'))




  return <div>
    <h3>
      Invoice Filter Page
    </h3>

    <br />
      <button onClick={() => navigate('/')}>Return Home</button> <span>UseNavigate Hook Kullanımı</span>
    </div>;
}

export default InvoiceFilter;

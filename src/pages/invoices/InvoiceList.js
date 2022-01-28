import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import InvoiceData from './InvoiceData';


// eğer Link yerine Navlink olarak tanımlarsak bu durumda Active olan sayfayı otomatik olarak yakalayabiliriz. NavLink içerisinde isActive propertysi sayesinde bunu yapabiliriz.

function InvoiceList() {



  return <div>
    <h3>
      Invoice List Page
    </h3>

    <div>
      {InvoiceData.map((item, key) => {
        return <div key={key}>
          <Link to={`/invoice/detail/${item.id}`}> {item.name}</Link>
        </div>
      })}
    </div>

  </div>;
}

export default InvoiceList;

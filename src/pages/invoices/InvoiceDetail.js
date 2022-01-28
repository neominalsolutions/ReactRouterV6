import React from 'react';
import { useParams } from 'react-router';
import invoiceData from './InvoiceData';
// useParams hook ile parametre olarak dinamik taşınan değerleri okuduk.

function InvoiceDetail() {
    let params = useParams();
    const invoice = invoiceData.find(x => x.id == params.id);
    
    return <div>
        <b>Name:</b>  {invoice.name}
        <br />
        <b> Amount: </b> {invoice.amount}
    </div>;
}

export default InvoiceDetail;

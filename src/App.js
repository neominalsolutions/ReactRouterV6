import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";
// link vermek için kullandık
// Outlet ile ise App.Js Layout özelliği kazandırmış olduk
// Outlet ile ise yönlendiğimiz sayfadaki component doma render oluyor

function App() {
  return (
    <div style={{padding:10}}>
      <h1>Layout</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoice">Invoices</Link> |{" "}
        <Link to="/expense">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

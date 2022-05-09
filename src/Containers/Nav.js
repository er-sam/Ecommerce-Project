import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import Product from "../../src/Containers"
import Product from './Product';


const Nav = () => {
  return(
  <>
  <Router>
    <div className="main-container">
    <div className="header">
        <ul>
            <div className="logo">
                <li><Link to="/"><span id="log">&#8962;|</span>Shophome!|</Link></li>
            </div>
            <div className="find">
                <input type="text" placeholder="Search iteam"/>
            </div>
            <div className="links">
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/customer">Customer</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/cart">Cart <span id="cart">&#128722;</span></Link></li>
            </div>
        </ul>
    </div>
    </div>

      {/* </div> */}
    <Routes>
          <Route path="/product">
            <Product />
          </Route>
          {/* <Route path="/business">
            <Business />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route> */}
        </Routes>

    </Router>
  );

  </>
  );
};

export default Nav;

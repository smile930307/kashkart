import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";
import Register from "./components/Register";

function App() {
  return (
    <DataProvider>
      <>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Products />
        </Switch>

        <Footer />
      </>
    </DataProvider>
  );
}

export default App;

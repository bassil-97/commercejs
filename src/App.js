import React, {useState, useEffect} from 'react';
import './App.css';

import { Products, Navbar, Cart, Checkout, Starter, Tabs } from './components';
import {LiquidSwipe} from './LiquidSwipe';
import { commerce } from './lib/commerce';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
     type: 'dark',
     background: {
       paper: '#17202A'
     },
     primary: {
        main: '#212F3D',
        card: '#808B96',
        cardBorder: '#566573'
     },
    } 
  });

  const lightTheme = createMuiTheme({
    palette: {
      background: {
        paper: '#F8F9FE'
      },
      primary: {
        main: '#F4F6F7',
        card: '#A6ACAF',
        cardBorder: '#D7DBDD'
      },
    }
  });

  function handleTheme() {
    setDarkMode(!darkMode);
  }

  useEffect( ()=> {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async ()=> {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();
    const productsPerCategory = categoriesData.reduce( (acc, category)=> {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product)=> 
            product.categories.find( (cat)=> cat.id === category.id )
          ),
        }
      ];
    }, []);
    setCategories(productsPerCategory);
    setIsLoaded(true);
  }

  const fetchCart = async ()=> {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity)=> {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log(error.data.error.message);
    }
  }

  const componentsToRender = [
    
      <Products isLoaded={isLoaded} products={products} categories={categories} onAddToCart={handleAddToCart} />
    ,
    
      <Cart 
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty} 
        onRemoveFromCart={handleRemoveFromCart} 
        onEmptyCart={handleEmptyCart} 
      />
    ,
      <Checkout 
        cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
      />
    ,
    
      <Starter exact path="/" />
    
  ];

  const colors = ['#85C1E9'];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <div className="App">
        <Paper className="paper" style={{minHeight: '100vh', borderRadius: '0'}}>
          <Navbar totalItems={cart.total_items} mode={darkMode} handleTheme={handleTheme} />
          <Switch>
            <Route exact path="/products">
              <Products isLoaded={isLoaded} products={products} categories={categories} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart 
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty} 
                onRemoveFromCart={handleRemoveFromCart} 
                onEmptyCart={handleEmptyCart} 
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout 
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
            <Route>
              <Starter exact path="/" />
            </Route>
          </Switch>    
          </Paper>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
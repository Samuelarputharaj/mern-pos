import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ProductProvider } from './context/ProductContext';

const App = () => {
    return (
        <ProductProvider>
            <Router>
                <Route path="/" component={HomePage} exact />
            </Router>
        </ProductProvider>
    );
};

export default App;

import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './NavBar';
import CategoryList from './CategoryList';
import Dashboard from './Dashboard';
import Category from './Category'
import Set from './Set';
import Product from './Product';
import Footer from './Footer';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar/>
					<Route path="/" exact component={CategoryList} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/category/:categoryID" component={Category} />
					<Route path="/set/:setID" component={Set} />
					<Route path="/product/:productID" component={Product} />
				<Footer />
			</BrowserRouter>
		</div>
	)
};

export default App;
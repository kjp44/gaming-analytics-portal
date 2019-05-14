import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './NavBar';
import CategoryList from './CategoryList';
import Dashboard from './Dashboard';
import Category from './Category'
import Set from './Set';
import Footer from './Footer';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar/>
					<Route path="/" exact component={CategoryList} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/category/:setID" exact component={Category} />
					<Route path="/category/:setID/set/:setID" component={Set} />
				<Footer />
			</BrowserRouter>
		</div>
	)
};

export default App;
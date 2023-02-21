import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";


const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<div id='page-body'>
					<Routes>
						<Route path='/' element={ <Home /> } />
						<Route path='/about' element={ <About /> } />
						<Route path='/articles' element={ <ArticlesList /> } />
						<Route path='/articles/:articleId' element={ <Article /> } />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

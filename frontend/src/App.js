import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import NotFound from './pages/NotFound';


const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<NavBar />
				<div id='page-body'>
					<Routes>
						<Route path='/' element={ <Home /> } />
						<Route path='/about' element={ <About /> } />
						<Route path='/articles' element={ <ArticleList /> } />
						<Route path='/articles/:articleId' element={ <Article /> } />
						<Route path='*' element={ <NotFound /> } />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};


export default App;

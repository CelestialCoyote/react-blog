import ArticlesList from '../components/ArticlesList/ArticlesList';
import articles from "./article-content";


const ArticleList = () => {
	return (
		<>
			<h1>Articles</h1>
			<ArticlesList articles={articles} />
		</>
	);
};


export default ArticleList;

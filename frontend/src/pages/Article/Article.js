import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import NotFound from "../NotFound";
import articles from "../article-content";
import './Article.css';


const Article = () => {
	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
	const { articleId } = useParams();

	useEffect(() => {
		const loadArticleInfo = async () => {
			const response = await axios.get(`/api/articles/${articleId}`);
			setArticleInfo(response.data);
		};

		loadArticleInfo();
	}, []);

	
	const article = articles.find(article => article.name === articleId)

	if(!article) {
		return <NotFound />;
	};

	return (
		<div className='article'>
			<h1>{article.title}</h1>
			<p>This article has {articleInfo.upvotes} upvote(s).</p>
			{article.content.map((paragraph, i) => (
				<p key={i}>{paragraph}</p>
			))}
		</div>
	);
};


export default Article;

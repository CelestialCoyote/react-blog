import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import useUser from '../../customHooks/useUser';
import CommentsList from '../../components/CommentsList/CommentsList';
import NotFound from "../NotFound";
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import articles from "../article-content";
import './Article.css';


const Article = () => {
	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
	const { articleId } = useParams();
	const { user, isLoading } = useUser();

	useEffect(() => {
		const loadArticleInfo = async () => {
			const response = await axios.get(`/api/articles/${articleId}`);
			setArticleInfo(response.data);
		};

		loadArticleInfo();
	}, []);

	const article = articles.find(article => article.name === articleId);

	const addUpvote = async () => {
		const response = await axios.put(`/api/articles/${articleId}/upvote`);
		setArticleInfo(response.data);
	};

	if (!article) {
		return <NotFound />;
	};

	return (
		<div className='article'>
			<h1>{article.title}</h1>
			<div className='upvotes-section'>
				{user
					? <button onClick={addUpvote}>Upvote</button>
					: <button>Log in to Upvote</button>
				}
				<p>This article has {articleInfo.upvotes} upvote(s).</p>
			</div>

			{article.content.map((paragraph, i) => (
				<p key={i}>{paragraph}</p>
			))}

			{user
				? <AddCommentForm
					articleName={articleId}
					onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
				/>
				: <button>Log in to add a comment</button>
			}

			<CommentsList comments={articleInfo.comments} />
		</div>
	);
};


export default Article;

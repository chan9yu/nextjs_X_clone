import BackButton from '../../../../../components/afterLogin/BackButton';
import Post from '../../../../../components/afterLogin/Post';
import CommentForm from '../../../../../components/status/CommentForm';
import styles from './page.module.css';

export default function SinglePostPage() {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<BackButton />
				<h3 className={styles.headerTitle}>게시하기</h3>
			</div>
			<Post />
			<CommentForm />
			<div>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

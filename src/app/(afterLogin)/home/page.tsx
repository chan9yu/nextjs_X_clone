import Post from '../../../components/afterLogin/Post';
import PostForm from '../../../components/home/PostForm';
import Tab from '../../../components/home/Tab';
import TabProvider from '../../../context/TabProvider';
import styles from './page.module.css';

export default function HomePage() {
	return (
		<main className={styles.main}>
			<TabProvider>
				<Tab />
				<PostForm />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</TabProvider>
		</main>
	);
}

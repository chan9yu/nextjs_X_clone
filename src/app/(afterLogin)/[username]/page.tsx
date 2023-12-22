import BackButton from '../../../components/afterLogin/BackButton';
import Post from '../../../components/afterLogin/Post';
import { user } from '../../../constants/dummy-constants';
import styles from './page.module.css';

export default function MyPage() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<BackButton />
				<h3 className={styles.headerTitle}>{user.nickname}</h3>
			</div>
			<div className={styles.userZone}>
				<div className={styles.userImage}>
					<img src={user.image} alt={user.id} />
				</div>
				<div className={styles.userName}>
					<div>{user.nickname}</div>
					<div>@{user.id}</div>
				</div>
				<button className={styles.followButton}>팔로우</button>
			</div>
			<div>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</main>
	);
}

'use client';

import { user } from '../../../constants/dummy-constants';
import styles from './FollowRecommend.module.css';

export default function FollowRecommend() {
	const onFollow = () => {
		console.log('### TEST onFollow');
	};

	return (
		<div className={styles.container}>
			<div className={styles.userLogoSection}>
				<div className={styles.userLogo}>
					<img src={user.image} alt={user.id} />
				</div>
			</div>
			<div className={styles.userInfo}>
				<div className={styles.title}>{user.nickname}</div>
				<div className={styles.count}>@{user.id}</div>
			</div>
			<div className={styles.followButtonSection}>
				<button onClick={onFollow}>팔로우</button>
			</div>
		</div>
	);
}

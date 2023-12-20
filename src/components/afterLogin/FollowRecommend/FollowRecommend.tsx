'use client';

import styles from './FollowRecommend.module.css';

const user = {
	id: 'danmuji',
	nickname: '단무지',
	image: 'https://img.hani.co.kr/imgdb/resize/2009/0203/123354307085_20090203.JPG'
};

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

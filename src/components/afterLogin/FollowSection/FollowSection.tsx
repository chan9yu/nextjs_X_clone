import FollowRecommend from '../FollowRecommend';
import styles from './FollowSection.module.css';

export default function FollowSection() {
	return (
		<div className={styles.followRecommend}>
			<h3>팔로우 추천</h3>
			<FollowRecommend />
			<FollowRecommend />
			<FollowRecommend />
		</div>
	);
}

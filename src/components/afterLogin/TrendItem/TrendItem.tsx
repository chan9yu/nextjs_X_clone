import Link from 'next/link';

import { APP_URL } from '../../../constants/route-constants';
import styles from './TrendItem.module.css';

export default function TrendItem() {
	return (
		<Link href={{ pathname: APP_URL.SEARCH, query: { q: '트렌드' } }} className={styles.container}>
			<div className={styles.count}>실시간트렌드</div>
			<div className={styles.title}>제봉팍</div>
			<div className={styles.count}>1,234 posts</div>
		</Link>
	);
}

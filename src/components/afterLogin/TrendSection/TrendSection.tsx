import TrendItem from '../TrendItem';
import styles from './TrendSection.module.css';

export default function TrendSection() {
	return (
		<div className={styles.trendBg}>
			<div className={styles.trend}>
				<h3>나를 위한 트렌드</h3>
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
				<TrendItem />
			</div>
		</div>
	);
}

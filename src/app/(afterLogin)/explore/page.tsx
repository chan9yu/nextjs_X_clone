import SearchForm from '../../../components/afterLogin/SearchForm';
import TrendItem from '../../../components/afterLogin/TrendItem';
import styles from './page.module.css';

export default function ExplorePage() {
	return (
		<main className={styles.main}>
			<div className={styles.formZone}>
				<SearchForm />
			</div>
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
				<TrendItem />
				<TrendItem />
			</div>
		</main>
	);
}

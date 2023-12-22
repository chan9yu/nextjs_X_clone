'use client';

import { usePathname } from 'next/navigation';

import { APP_URL } from '../../../constants/route-constants';
import TrendItem from '../TrendItem';
import styles from './TrendSection.module.css';

export default function TrendSection() {
	const pathname = usePathname();

	if (pathname === APP_URL.EXPLORE) {
		return null;
	}

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

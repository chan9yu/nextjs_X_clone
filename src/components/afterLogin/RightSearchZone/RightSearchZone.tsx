'use client';

import { usePathname } from 'next/navigation';

import { APP_URL } from '../../../constants/route-constants';
import SearchForm from '../SearchForm';
import styles from './RightSearchZone.module.css';

export default function RightSearchZone() {
	const pathname = usePathname();

	const onChangeFollow = () => {
		console.log('### onChangeFollow');
	};

	const onChangeAll = () => {
		console.log('### onChangeAll');
	};

	if (pathname === APP_URL.EXPLORE) {
		return null;
	}

	if (pathname === APP_URL.SEARCH) {
		return (
			<div>
				<h5 className={styles.filterTitle}>검색 필터</h5>
				<div className={styles.filterSection}>
					<div>
						<label>사용자</label>
						<div className={styles.radio}>
							<div>모든 사용자</div>
							<input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
						</div>
						<div className={styles.radio}>
							<div>내가 팔로우하는 사람들</div>
							<input type="radio" name="pf" value="on" onChange={onChangeFollow} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<SearchForm />
		</div>
	);
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import styles from './SearchTab.module.css';

enum SEARCH_TAB_CURRENT {
	HOT = 'hot',
	NEW = 'new'
}

export default function SearchTab() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [current, setCurrent] = useState<SEARCH_TAB_CURRENT>(SEARCH_TAB_CURRENT.HOT);

	const onClickHot = () => {
		setCurrent(SEARCH_TAB_CURRENT.HOT);
		router.replace(`/search?q=${searchParams.get('q')}`);
	};

	const onClickNew = () => {
		setCurrent(SEARCH_TAB_CURRENT.NEW);
		router.replace(`/search?${searchParams.toString()}&f=live`);
	};

	return (
		<div className={styles.homeFixed}>
			<div className={styles.homeTab}>
				<div onClick={onClickHot}>
					인기
					<div className={styles.tabIndicator} hidden={current === SEARCH_TAB_CURRENT.NEW} />
				</div>
				<div onClick={onClickNew}>
					최신
					<div className={styles.tabIndicator} hidden={current === SEARCH_TAB_CURRENT.HOT} />
				</div>
			</div>
		</div>
	);
}

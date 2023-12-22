'use client';

import { useState } from 'react';

import { HOME_TAB } from '../../../constants/home-constants';
import styles from './Tab.module.css';

export default function Tab() {
	const [tab, setTab] = useState<HOME_TAB>(HOME_TAB.REC);

	const onClickRec = () => {
		setTab(HOME_TAB.REC);
	};

	const onClickFol = () => {
		setTab(HOME_TAB.FOL);
	};

	return (
		<div className={styles.homeFixed}>
			<div className={styles.homeText}>홈</div>
			<div className={styles.homeTab}>
				<div onClick={onClickRec}>
					추천
					<div className={styles.tabIndicator} hidden={tab === HOME_TAB.FOL}></div>
				</div>
				<div onClick={onClickFol}>
					팔로우 중<div className={styles.tabIndicator} hidden={tab === HOME_TAB.REC}></div>
				</div>
			</div>
		</div>
	);
}

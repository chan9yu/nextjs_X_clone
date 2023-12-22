'use client';

import { me } from '../../../constants/dummy-constants';
import styles from './LogoutButton.module.css';

export default function LogoutButton() {
	const onLogout = () => {
		console.log('### TEST Logout');
	};

	return (
		<button className={styles.logOutButton} onClick={onLogout}>
			<div className={styles.logOutUserImage}>
				<img src={me.image} alt={me.id} />
			</div>
			<div className={styles.logOutUserName}>
				<div>{me.nickname}</div>
				<div>@{me.id}</div>
			</div>
		</button>
	);
}

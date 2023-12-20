'use client';

import styles from './LogoutButton.module.css';

// dummy
const me = {
	id: 'jebong',
	nickname: '박제봉',
	image:
		'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
};

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

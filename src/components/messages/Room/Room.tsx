'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/navigation';

import { messageUser as user } from '../../../constants/dummy-constants';
import { APP_URL } from '../../../constants/route-constants';
import styles from './Room.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
	const router = useRouter();

	const onClick = () => {
		router.push(`${APP_URL.MESSAGES}/${user.Messages.at(-1)?.roomId}`);
	};

	return (
		<div className={styles.room} onClickCapture={onClick}>
			<div className={styles.roomUserImage}>
				<img src={user.image} alt="avatar" />
			</div>
			<div className={styles.roomChatInfo}>
				<div className={styles.roomUserInfo}>
					<b>{user.nickname}</b>
					&nbsp;
					<span>@{user.id}</span>
					&nbsp; · &nbsp;
					<span className={styles.postDate}>{dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}</span>
				</div>
				<div className={styles.roomLastChat}>{user.Messages?.at(-1)?.content}</div>
			</div>
		</div>
	);
}

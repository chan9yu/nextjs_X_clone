import cx from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import BackButton from '../../../../components/afterLogin/BackButton';
import { me, messages, user } from '../../../../constants/dummy-constants';
import styles from './page.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function ChatRoom() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<BackButton />
				<div>
					<h2>{user.nickname}</h2>
				</div>
			</div>
			<Link href={user.id} className={styles.userInfo}>
				<img src={user.image} alt={user.id} />
				<div>
					<b>{user.nickname}</b>
				</div>
				<div>@{user.id}</div>
			</Link>
			<div className={styles.list}>
				{messages.map(m => {
					if (m.id === me.id) {
						return (
							<div key={m.messageId} className={cx(styles.message, styles.myMessage)}>
								<div className={styles.content}>{m.content}</div>
								<div className={styles.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
							</div>
						);
					}
					return (
						<div key={m.messageId} className={cx(styles.message, styles.yourMessage)}>
							<div className={styles.content}>{m.content}</div>
							<div className={styles.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}

import Room from '../../../components/messages/Room';
import styles from './page.module.css';

export default function MessagePage() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h3>쪽지</h3>
			</div>
			<Room />
			<Room />
			<Room />
			<Room />
			<Room />
			<Room />
		</main>
	);
}

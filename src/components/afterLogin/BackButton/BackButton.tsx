'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '../../icons/BackIcon';
import styles from './BackButton.module.css';

export default function BackButton() {
	const router = useRouter();

	const onClickBack = () => {
		router.back();
	};

	return (
		<button className={styles.backButton} onClick={onClickBack}>
			<BackIcon />
		</button>
	);
}

'use client';

import { useRouter } from 'next/navigation';

import CloseIcon from '../../icons/CloseIcon';
import style from './PhotoModalCloseButton.module.css';

export default function PhotoModalCloseButton() {
	const router = useRouter();

	const onClick = () => {
		router.back();
	};

	return (
		<button className={style.closeButton} onClick={onClick}>
			<CloseIcon />
		</button>
	);
}

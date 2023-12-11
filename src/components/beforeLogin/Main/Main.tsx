import Link from 'next/link';

import { APP_URL } from '../../../constants/route';
import XLogoIcon from '../../ui/icons/XLogoIcon';
import styles from './Main.module.scss';

export default function Main() {
	return (
		<section className={styles.content}>
			<div className={styles['left-wrapper']}>
				<XLogoIcon />
			</div>
			<div className={styles['right-wrapper']}>
				<div className={styles['right-wrapper__inner']}>
					<h1 className={styles['title']}>지금 일어나고 있는 일</h1>
					<h2 className={styles['sub-title']}>지금 가입하세요.</h2>
					<Link className={styles['button']} href={APP_URL.SIGNUP}>
						계정 만들기
					</Link>
					<h3 className={styles['text']}>이미 트위터에 가입하셨나요?</h3>
					<Link className={styles['sub-button']} href={APP_URL.LOGIN}>
						로그인
					</Link>
				</div>
			</div>
		</section>
	);
}
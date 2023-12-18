import CloseIcon from '../../ui/icons/CloseIcon';
import XLogoIcon from '../../ui/icons/XLogoIcon';
import styles from './LoginModal.module.scss';

export default function LoginModal() {
	return (
		<div className={styles['container']}>
			<div className={styles['modal-header']}>
				<CloseIcon className={styles['modal-header__close-icon']} size={24} />
				<XLogoIcon className={styles['modal-header__logo-icon']} size={28} />
			</div>
			<div className={styles['modal-body']}>
				<h2 className={styles['modal-body__title']}>X 가입하기</h2>
				<input type="text" />
				<button>다음</button>
				<span>계정이 없으신가요? 가입하기</span>
			</div>
		</div>
	);
}

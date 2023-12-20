import styles from './Footer.module.scss';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return <footer className={styles.container}>&copy;{currentYear} chan9yu.</footer>;
}

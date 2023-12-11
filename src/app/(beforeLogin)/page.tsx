import { ChildrenProps } from '../../@types/common';
import Footer from '../../components/beforeLogin/Footer';
import Main from '../../components/beforeLogin/Main';
import styles from './page.module.scss';

export default async function BeforeLoginPage({ children }: ChildrenProps) {
	return (
		<main className={styles.container}>
			<Main />
			{children}
			<Footer />
		</main>
	);
}

import { ReactNode } from 'react';

import type { ChildrenProps } from '../../@types/common';
import Footer from './_components/Footer';
import Main from './_components/Main';
import styles from './page.module.scss';

type BeforeLoginPageProps = ChildrenProps & {
	modal?: ReactNode;
};

export default async function BeforeLoginPage({ children, modal }: BeforeLoginPageProps) {
	return (
		<main className={styles.container}>
			<Main />
			<Footer />
		</main>
	);
}

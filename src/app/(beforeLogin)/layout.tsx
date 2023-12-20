import { ReactNode } from 'react';

import type { ChildrenProps } from '../../@types/common';
import styles from './layout.module.css';

type BeforeLoginPageProps = ChildrenProps & {
	modal?: ReactNode;
};

export default function BeforeLoginLayout({ children, modal }: BeforeLoginPageProps) {
	return (
		<div className={styles.container}>
			{children}
			{modal}
		</div>
	);
}

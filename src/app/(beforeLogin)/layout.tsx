import { ReactNode } from 'react';
import type { ChildrenProps } from '../../@types/common';

type BeforeLoginPageProps = ChildrenProps & {
	modal?: ReactNode;
};

export default function RootLayout({ children, modal }: BeforeLoginPageProps) {
	return (
		<>
			{children}
			{modal}
		</>
	);
}

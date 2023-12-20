import { ReactNode } from 'react';
import type { ChildrenProps } from '../../@types/common';

type BeforeLoginPageProps = ChildrenProps & {
	modal?: ReactNode;
};

export default async function BeforeLoginPage({ children, modal }: BeforeLoginPageProps) {
	return <main>BeforeLoginPage</main>;
}

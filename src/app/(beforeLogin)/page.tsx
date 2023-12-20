import { ReactNode } from 'react';

import type { ChildrenProps } from '../../@types/common';
import Main from '../../components/beforeLogin/Main';

type BeforeLoginPageProps = ChildrenProps & {
	modal?: ReactNode;
};

export default async function BeforeLoginPage({ children, modal }: BeforeLoginPageProps) {
	return <Main />;
}

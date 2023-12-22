import Link from 'next/link';
import { ReactNode } from 'react';

import type { ChildrenProps } from '../../@types/common';
import FollowSection from '../../components/afterLogin/FollowSection';
import LogoutButton from '../../components/afterLogin/LogoutButton';
import NavMenu from '../../components/afterLogin/NavMenu';
import RightSearchZone from '../../components/afterLogin/RightSearchZone';
import TrendSection from '../../components/afterLogin/TrendSection';
import XLogoIcon from '../../components/icons/XLogoIcon';
import { APP_URL } from '../../constants/route-constants';
import styles from './layout.module.css';

type AfterLoginLayoutProps = ChildrenProps & {
	modal?: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: AfterLoginLayoutProps) {
	return (
		<div className={styles.container}>
			<header className={styles.leftSectionWrapper}>
				<section className={styles.leftSection}>
					<div className={styles.leftSectionFixed}>
						<Link href={APP_URL.HOME} className={styles.logo}>
							<div className={styles.logoPill}>
								<XLogoIcon size={40} />
							</div>
						</Link>
						<NavMenu />
						<LogoutButton />
					</div>
				</section>
			</header>
			<div className={styles.rightSectionWrapper}>
				<div className={styles.rightSectionInner}>
					<main className={styles.main}>{children}</main>
					<section className={styles.rightSection}>
						<RightSearchZone />
						<TrendSection />
						<FollowSection />
					</section>
				</div>
			</div>
			{modal}
		</div>
	);
}

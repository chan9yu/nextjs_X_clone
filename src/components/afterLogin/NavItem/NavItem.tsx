'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './NavItem.module.css';

type NavItemProps = {
	/** Nav에 노출되는 활성화된 아이콘 */
	actvieIcon: ReactNode;

	/** Nav에 노출되는 아이콘 */
	icon: ReactNode;

	/** Nav 활성화 여부 */
	isActive: boolean;

	/** Nav에 노출되는 텍스트 */
	label: string;

	/** 클릭 시 이동할 URL 주소 */
	to: string;
};

export default function NavItem({ actvieIcon, icon, isActive, label, to }: NavItemProps) {
	return (
		<Link href={to}>
			<div className={styles.navPill}>
				{isActive ? (
					<>
						{actvieIcon}
						<div style={{ fontWeight: 'bold' }}>{label}</div>
					</>
				) : (
					<>
						{icon}
						<div>{label}</div>
					</>
				)}
			</div>
		</Link>
	);
}

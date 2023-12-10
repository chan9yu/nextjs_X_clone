import type { ChildrenProps } from '../../@types/common';

export default function AfterLoginLayout({ children }: ChildrenProps) {
	return (
		<div>
			애프터 로그인 레이아웃
			{children}
		</div>
	);
}

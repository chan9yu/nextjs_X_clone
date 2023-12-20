'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { APP_URL, URL_SEGMENT } from '../../../constants/route-constants';
import ExploreFillIcon from '../../ui/icons/ExploreFillIcon';
import ExploreIcon from '../../ui/icons/ExploreIcon';
import HomeFillIcon from '../../ui/icons/HomeFillIcon';
import HomeIcon from '../../ui/icons/HomeIcon';
import MessageFillIcon from '../../ui/icons/MessageFillIcon';
import MessageIcon from '../../ui/icons/MessageIcon';
import UserFillIcon from '../../ui/icons/UserFillIcon';
import UserIcon from '../../ui/icons/UserIcon';
import NavItem from '../NavItem';
import styles from './NavMenu.module.css';

// dummy
const me = {
	id: 'jebong',
	nickname: '박제봉',
	image:
		'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
};

export default function NavMenu() {
	const segment = useSelectedLayoutSegment();

	return (
		<nav className={styles.container}>
			<ul>
				<li>
					<NavItem
						actvieIcon={<HomeFillIcon />}
						icon={<HomeIcon />}
						isActive={segment === URL_SEGMENT.HOME}
						label="홈"
						to={APP_URL.HOME}
					/>
				</li>
				<li>
					<NavItem
						actvieIcon={<ExploreFillIcon />}
						icon={<ExploreIcon />}
						isActive={Boolean(segment && [URL_SEGMENT.EXPLORE, URL_SEGMENT.SEARCH].includes(segment as URL_SEGMENT))}
						label="탐색하기"
						to={APP_URL.EXPLORE}
					/>
				</li>
				<li>
					<NavItem
						actvieIcon={<MessageFillIcon />}
						icon={<MessageIcon />}
						isActive={segment === URL_SEGMENT.MESSAGE}
						label="쪽지"
						to={APP_URL.MESSAGE}
					/>
				</li>
				{me?.id && (
					<li>
						<NavItem
							actvieIcon={<UserFillIcon />}
							icon={<UserIcon />}
							isActive={segment === me.id}
							label="프로필"
							to={`/${me?.id}`}
						/>
					</li>
				)}
			</ul>
			<Link href={APP_URL.COMPOSE_TWEET} className={styles.postButton}>
				게시하기
			</Link>
		</nav>
	);
}

'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { me } from '../../../constants/dummy-constants';
import { APP_URL, URL_SEGMENT } from '../../../constants/route-constants';
import ExploreFillIcon from '../../icons/ExploreFillIcon';
import ExploreIcon from '../../icons/ExploreIcon';
import HomeFillIcon from '../../icons/HomeFillIcon';
import HomeIcon from '../../icons/HomeIcon';
import MessageFillIcon from '../../icons/MessageFillIcon';
import MessageIcon from '../../icons/MessageIcon';
import UserFillIcon from '../../icons/UserFillIcon';
import UserIcon from '../../icons/UserIcon';
import NavItem from '../NavItem';
import styles from './NavMenu.module.css';
import TweetIcon from '../../icons/TweetIcon';

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
						isActive={segment === URL_SEGMENT.MESSAGES}
						label="쪽지"
						to={APP_URL.MESSAGES}
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
				<span>게시하기</span>
				<TweetIcon />
			</Link>
		</nav>
	);
}

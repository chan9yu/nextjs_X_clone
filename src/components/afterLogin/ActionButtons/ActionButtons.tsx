'use client';

import cx from 'classnames';

import ChatIcon from '../../icons/ChatIcon';
import HeartIcon from '../../icons/HeartIcon';
import RepostIcon from '../../icons/RepostIcon';
import style from './ActionButtons.module.css';

type ActionButtonsProps = {
	white?: boolean;
};

export default function ActionButtons({ white }: ActionButtonsProps) {
	const commented = true;
	const reposted = true;
	const liked = false;

	const onClickComment = () => {
		console.log('### onClickComment');
	};

	const onClickRepost = () => {
		console.log('### onClickRepost');
	};

	const onClickHeart = () => {
		console.log('### onClickHeart');
	};

	return (
		<div className={style.actionButtons}>
			<div className={cx(style.commentButton, { [style.commented]: commented }, white && style.white)}>
				<button onClick={onClickComment}>
					<ChatIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
			<div className={cx(style.repostButton, reposted && style.reposted, white && style.white)}>
				<button onClick={onClickRepost}>
					<RepostIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
			<div className={cx([style.heartButton, liked && style.liked, white && style.white])}>
				<button onClick={onClickHeart}>
					<HeartIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
		</div>
	);
}

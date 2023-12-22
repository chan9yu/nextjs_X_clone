'use client';

import cx from 'classnames';

import ChatIcon from '../../icons/ChatIcon';
import HeartIcon from '../../icons/HeartIcon';
import RepostIcon from '../../icons/RepostIcon';
import style from './ActionButtons.module.css';

export default function ActionButtons() {
	const commented = true;
	const reposted = true;
	const liked = false;

	const onClickComment = () => {};
	const onClickRepost = () => {};
	const onClickHeart = () => {};

	return (
		<div className={style.actionButtons}>
			<div className={cx(style.commentButton, { [style.commented]: commented })}>
				<button onClick={onClickComment}>
					<ChatIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
			<div className={cx(style.repostButton, reposted && style.reposted)}>
				<button onClick={onClickRepost}>
					<RepostIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
			<div className={cx([style.heartButton, liked && style.liked])}>
				<button onClick={onClickHeart}>
					<HeartIcon />
				</button>
				<div className={style.count}>{1 || ''}</div>
			</div>
		</div>
	);
}

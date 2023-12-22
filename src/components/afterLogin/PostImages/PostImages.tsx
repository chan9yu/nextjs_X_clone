import cx from 'classnames';
import Link from 'next/link';

import styles from './PostImages.module.css';

type PostImagesProps = {
	post: {
		postId: number;
		User: {
			id: string;
			nickname: string;
			image: string;
		};
		content: string;
		createdAt: Date;
		Images: { imageId: number; link: string }[];
	};
};

export default function PostImages({ post }: PostImagesProps) {
	if (!post.Images) return null;

	if (!post.Images.length) return null;

	if (post.Images.length === 1) {
		return (
			<Link
				href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
				className={cx(styles.postImageSection, styles.oneImage)}
				style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'contain' }}
			>
				<img src={post.Images[0]?.link} alt="" />
			</Link>
		);
	}

	if (post.Images.length === 2) {
		return (
			<div className={cx(styles.postImageSection, styles.twoImage)}>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
					style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover' }}
				/>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
					style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover' }}
				/>
			</div>
		);
	}

	if (post.Images.length === 3) {
		return (
			<div className={cx(styles.postImageSection, styles.threeImage)}>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
					style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover' }}
				/>
				<div>
					<Link
						href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
						style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover' }}
					/>
					<Link
						href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
						style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover' }}
					/>
				</div>
			</div>
		);
	}

	if (post.Images.length === 4) {
		return (
			<div className={cx(styles.postImageSection, styles.fourImage)}>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
					style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover' }}
				/>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
					style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover' }}
				/>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
					style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover' }}
				/>
				<Link
					href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
					style={{ backgroundImage: `url(${post.Images[3]?.link})`, backgroundSize: 'cover' }}
				/>
			</div>
		);
	}

	return null;
}

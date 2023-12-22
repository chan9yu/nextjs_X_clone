'use client';

import { useRouter } from 'next/navigation';

import type { ChildrenProps } from '../../../@types/common';
import styles from './PostArticle.module.css';

type PostArticleProps = ChildrenProps & {
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

export default function PostArticle({ children, post }: PostArticleProps) {
	const router = useRouter();

	const onClick = () => {
		router.push(`/${post.User.id}/status/${post.postId}`);
	};

	return (
		<article className={styles.post} onClickCapture={onClick}>
			{children}
		</article>
	);
}

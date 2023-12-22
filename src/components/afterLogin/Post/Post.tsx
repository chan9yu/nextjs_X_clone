import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import { target } from '../../../constants/dummy-constants';
import ActionButtons from '../ActionButtons';
import PostArticle from '../PostArticle';
import PostImages from '../PostImages';
import styles from './Post.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type PostProps = {
	noImage?: boolean;
};

export default function Post({ noImage }: PostProps) {
	if (Math.random() > 0.5 && !noImage) {
		target.Images.push(
			{ imageId: 1, link: faker.image.urlLoremFlickr() },
			{ imageId: 2, link: faker.image.urlLoremFlickr() },
			{ imageId: 3, link: faker.image.urlLoremFlickr() },
			{ imageId: 4, link: faker.image.urlLoremFlickr() }
		);
	}

	return (
		<PostArticle post={target}>
			<div className={styles.postWrapper}>
				<div className={styles.postUserSection}>
					<Link href={`/${target.User.id}`} className={styles.postUserImage}>
						<img src={target.User.image} alt={target.User.nickname} />
						<div className={styles.postShade} />
					</Link>
				</div>
				<div className={styles.postBody}>
					<div className={styles.postMeta}>
						<Link href={`/${target.User.id}`}>
							<span className={styles.postUserName}>{target.User.nickname}</span>
							&nbsp;
							<span className={styles.postUserId}>@{target.User.id}</span>
							&nbsp; · &nbsp;
						</Link>
						<span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
					</div>
					<div>{target.content}</div>
					<div>
						<PostImages post={target} />
					</div>
					<ActionButtons />
				</div>
			</div>
		</PostArticle>
	);
}

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

import ActionButtons from '../ActionButtons';
import styles from './Post.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const target = {
	User: {
		id: 'danmuji',
		nickname: '단무지',
		image: 'https://img.hani.co.kr/imgdb/resize/2009/0203/123354307085_20090203.JPG'
	},
	content: '안녕하세요 단무지에요',
	createdAt: new Date(),
	Images: []
};

export default function Post() {
	return (
		<article className={styles.post}>
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
					<div className={styles.postImageSection}></div>
					<ActionButtons />
				</div>
			</div>
		</article>
	);
}
